const Link = ({url, title, children}) => {
    return (
        <a className="link" href={url} title={title}>
            {children}
        </a>
    )
}

export default Link