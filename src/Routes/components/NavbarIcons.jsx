import { Link} from 'react-router-dom';
import discord from '../img/discord.webp'
import youtube from '../img/youtube.webp'

export const NavbarIcons = () => {
    return (
        <ul className='navbar-nav ms-auto'>
            <Link to='https://www.youtube.com/@pokeasistente'>
                <img className="youtube ms-2" src={youtube} alt="Youtube" />
            </Link>
            <Link to='https://discord.gg/3kGrq8CTAZ'>
                <img className="discord ms-2" src={discord} alt="Discord" />
            </Link>
        </ul>
    )
}