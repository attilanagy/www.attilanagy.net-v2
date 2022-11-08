import { ReactComponent as LinkedInIcon } from './svgs/linkedin.svg'
import { ReactComponent as GitHubIcon } from './svgs/github.svg'
import { ReactComponent as TryHackMeIcon } from './svgs/tryhackme.svg'
import Link from '../link/Link'

const Icons = () => {
    return (
        <div className="icons-container">
            <Link url="https://www.linkedin.com/in/nattila" title="LinkedIn">
                <LinkedInIcon />
            </Link>
            <Link url="https://github.com/attilanagy" title="GitHub">
                <GitHubIcon />
            </Link>
            <Link url="https://tryhackme.com/p/andarkside#yearly-activity" title="TryHackMe">
                <TryHackMeIcon />
            </Link>
        </div>
    )
}

export default Icons