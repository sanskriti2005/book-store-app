import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";


export default function Navbar(){
    const {login, logoutFunc} = useContext(AuthContext);
    return(
        <nav>
            <NavLink to='/' className='nav-link'>
            Home
            </NavLink>
            <NavLink to='/books' className='nav-link'>
            Books
            </NavLink>
            {
                login 
                ? <button onClick={logoutFunc}>
                Logout
                </button>
                : <NavLink to='/login' className='nav-link'>
                Login
                </NavLink>
            }
            
        </nav>
    );
}