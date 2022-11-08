import { render, screen } from "@testing-library/react"
import Link from "./Link"

test('renders link with proper URL', () => {
    const url = 'http://example.com'

    render(<Link url={url}>hello</Link>)
    const theLink = screen.getByText('hello')

    expect(theLink).toHaveAttribute('href', url)
})

test('renders link with proper title', () => {
    const title = 'this is my title'

    render(<Link title={title}>hello</Link>)
    const theLink = screen.getByText('hello')

    expect(theLink).toHaveAttribute('title', title)
})

test('renders children', () => {
    const divText = 'this is my children div'

    render(<Link url="http://www.example.com" title="hello"><div>{divText}</div></Link>)
    const theLink = screen.getByText(divText)

    expect(theLink).toBeInTheDocument()
})