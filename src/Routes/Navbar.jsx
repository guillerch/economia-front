import { Link, NavLink} from 'react-router-dom';
import logo from './img/logo.webp'
import discord from './img/discord.webp'
import youtube from './img/youtube.webp'
import { useState,useEffect, useRef } from 'react';

export const Navbar = () => {
    const [displayDropdown, setDisplayDropdown] = useState(false);
    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e) =>{
            if (!menuRef.current.contains(e.target)) {
                setDisplayDropdown(false);
            }
        }
        document.addEventListener("mousedown",handler)
    })

    return (
        <nav className='navbar navbar-expand-md'>
            <div 
            className="container-fluid"
            ref={menuRef}>
                <Link className="navbar-brand"
                to={'/'}>
                <img className='brand-main' src={logo} alt="Poke Asistente" />
                </Link>
                <button 
                    className={`${!displayDropdown ? 'navbar-toggler general_color collapsed' : 'navbar-toggler general_color'}`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu"
                    aria-controls="navbarSupportedContent"
                    aria-expanded={displayDropdown}
                    aria-label="Toggle navigation"
                    onClick={() => {!setDisplayDropdown(!displayDropdown)}}>
                    <span className="navbar-toggler-icon general_color"></span>
                </button>

                <div 
                    className={`${!displayDropdown ? 'navbar-collapse general_color collapse' : 'navbar-collapse general_color collapse animate__animated animate__backInDown'}`} 
                    id="menu">
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
