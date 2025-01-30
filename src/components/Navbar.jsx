import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'


export default function Navbar(){
    return(
        <nav>
            <NavLink to='/' className='nav-link'>
            Home
            </NavLink>
            <NavLink to='/books' className='nav-link'>
            Books
            </NavLink>
            <NavLink to='/login' className='nav-link'>
            Login
            </NavLink>
        </nav>
    );
}