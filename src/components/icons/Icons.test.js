import { render, screen } from "@testing-library/react"
import Icons from "./Icons"

['LinkedIn', 'GitHub', 'TryHackMe'].forEach(siteName => {
    test(`renders ${siteName} link`, () => {
        render(<Icons />)
    
        const siteLink = screen.getByTitle(siteName)
        expect(siteLink).toBeInTheDocument()
    })
})