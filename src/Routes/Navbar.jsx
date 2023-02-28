import { Link, NavLink} from 'react-router-dom';
import logo from './img/logo.png'
import discord from './img/discord.png'
import youtube from './img/youtube.png'
import { HamMenu } from './HamMenu';
import { useState } from 'react';

export const Navbar = () => {
    const [displayDropdown, setDisplayDropdown] = useState(true);
    const closeDropdown = () => {
        setDisplayDropdown(false);
    }

    return (
        <nav className='navbar navbar-expand-md'>
            <div className="container-fluid">

                <Link className="navbar-brand"
                to={'/'}>
                <img src={logo} alt="Poke Asistente" />
                </Link>
                {displayDropdown && <HamMenu/>}
                <div className="collapse navbar-collapse general_color" id="menu">
                <ul className="navbar-nav">
                <NavLink
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}`}
                        to="/crianza">
                        Crianza
                    </NavLink>
                    <NavLink
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}`}
                        to="/bayas">
                        Bayas
                    </NavLink>
                    <NavLink
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}`}
                        to="/terminos">
                        T&C
                    </NavLink>
                    <NavLink
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active':''}`}
                        to="/politicas">
                        Politicas
                    </NavLink>
                </ul>
                <ul className='navbar-nav ms-auto'>
                    <Link to='https://www.youtube.com/@pokeasistente'>
                        <img className="youtube ms-2" src={youtube} alt="Youtube" />
                    </Link>
                    <Link to='https://discord.gg/3kGrq8CTAZ'>
                        <img className="discord ms-2" src={discord} alt="Discord" />
                    </Link>
                </ul>
                </div>
            </div>

            
        </nav>
    )
}
