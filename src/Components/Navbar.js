
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuItemClick = () => {
        setMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <div>
            <nav >
                <input type="checkbox" id="click" checked={menuOpen} onChange={() => setMenuOpen(!menuOpen)} />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                    <div id="logo">
                        <Link to="/" className='navbar-brand'><h1>HairStyler</h1></Link>
                    </div>
                </label>
                <ul>
                    <li><NavLink activeclassname="active" to="/" onClick={handleMenuItemClick}>Home</NavLink></li>
                    <li><NavLink to="/about" onClick={handleMenuItemClick}>About</NavLink></li>
                    <li><NavLink to="/services" onClick={handleMenuItemClick}>Services</NavLink></li>
                    <li><NavLink to="/pricing" onClick={handleMenuItemClick}>Pricing</NavLink></li>
                    <li><NavLink to="/team" onClick={handleMenuItemClick}>Team</NavLink></li>
                    <li><NavLink to="/contact" onClick={handleMenuItemClick}>Contact</NavLink></li>
                    <li onClick={handleMenuItemClick}>  <button className='btn btn-signup show'>SignUp</button></li>
                </ul>
                <div className='btn-main hide'>
                    <button className='btn btn-signup hide'>SignUp</button></div>
            </nav>
        </div>
    );
};

export default Navbar;
