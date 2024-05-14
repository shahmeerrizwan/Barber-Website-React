
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

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
                    <li><Link to="/" onClick={handleMenuItemClick}>Home</Link></li>
                    <li><Link to="/about" onClick={handleMenuItemClick}>About</Link></li>
                    <li><Link to="/services" onClick={handleMenuItemClick}>Services</Link></li>
                    <li><Link to="/pricing" onClick={handleMenuItemClick}>Pricing</Link></li>
                    <li><Link to="/team" onClick={handleMenuItemClick}>Team</Link></li>
                    <li><Link to="/contact" onClick={handleMenuItemClick}>Contact</Link></li>
                    <li onClick={handleMenuItemClick}>  <button className='btn btn-signup show'>SignUp</button></li>
                </ul>
                <div className='btn-main hide'>
                    <button className='btn btn-signup hide'>SignUp</button></div>
            </nav>
        </div>
    );
};

export default Navbar;
