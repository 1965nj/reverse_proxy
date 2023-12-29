import React, { useState } from 'react';
import logo from '../images/img1.png';
import { Link } from 'react-scroll';
import Login from '../login';


function Navbar() {
    const [nav, setnav] = useState(false);
    /*const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);*/
    return (
        <nav className={nav ? "nav active":"nav"}>
            <Link to='#' className='logo'>
                <img src={logo} alt=''/>
            </Link>
            
            <label className='menu-icon' for='menu-btn'>
                <span className='nav-icon'></span>
            </label>
            <ul className='menu'>
                
                <li><Link to='#'>Home</Link></li>
                <li><Link to='#'>about</Link></li>
                <li><Link to='#'>contact</Link></li>
                <li><Link to='Login'>login</Link></li>
                <li><Link to='#'>sign_up</Link></li>
            </ul>
        </nav>
            );
}
export default Navbar;
