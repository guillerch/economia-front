import { Link} from 'react-router-dom';
import logo from './img/logo.webp'
import { DisplayDropDown } from './helpers/DisplayDropDown';
import { NavbarIcons } from './components/NavbarIcons';
import { NavbarLinks } from './components/NavbarLinks';


export const Navbar = () => {

    const {menuRef,displayDropdown,setDisplayDropdown} = DisplayDropDown();

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
                    <NavbarLinks/>
                    <hr className='nav-item'/>
                    <NavbarIcons/>
                </div>
            </div>
        </nav>
    )
}