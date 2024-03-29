import {Link} from 'react-router-dom';


export const NavbarLinks = () => {
    return (

    <ul className="navbar-nav">
        <Link
            className='nav-item nav-link'
            to="/crianza">
            Crianza
        </Link>
        <Link
            className='nav-item nav-link'
            to="/bayas">
            Bayas
        </Link>
        <Link
            className='nav-item nav-link'
            to="/terminos">
            T&C
        </Link>
        <Link
            className='nav-item nav-link'
            to="/politicas">
            Politicas
        </Link>
        {/* <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle nav-item" to='/blog' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Blog
            </Link>
            <ul className="dropdown-menu">
                {data.map(categorie => 
                    <li key={categorie.slug}>
                        <Link className="dropdown-item nav-item" to={`blog/${categorie.slug}`}>
                            {categorie.name}
                        </Link>
                    </li>
                )}
            </ul>
            </li> */}
        </ul>
    )
}