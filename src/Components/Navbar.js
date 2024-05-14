
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';


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



    const [modal, setModal] = useState(false);
    if (modal) {
        document.body.classList.add("active-modal")
    } else {
        document.body.classList.remove("active-modal")

    }
    const toggleModal = () => {
        setModal(!modal);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        const emailInput = event.target.querySelector('input[type="email"]');
        const emailValue = emailInput.value.trim();


        if (!emailValue) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email address!',
            });
            return;
        }

        Swal.fire({
            title: 'Are you sure?',
            text: 'Once submitted, you will not be able to change your details!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, submit it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Successfully Subscribed!',
                    'Enjoy Your Subscription',
                    'success'
                );
                toggleModal();
            }
        });
    };


    return (
        <>
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
                    <li >  <button onClick={toggleModal} className='btn btn-signup show' >SignUp</button></li>
                </ul>
                <div className='btn-main hide'>
                    <button onClick={toggleModal} className='btn btn-signup hide'>SignUp</button></div>
            </nav>


            {modal && (
                <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h2 className='h1-1'>KÜFFNER.</h2>
                        <p className='p-l-1'>INSIGHTS</p>
                        <h2>Business News & Updates</h2>
                        <p>
                            Trage dich jetzt kostenfrei ein und sei immer auf dem
                            Laufenden!
                        </p>
                        <form onSubmit={handleFormSubmit}>
                            <input
                                className='inp'
                                type='email'
                                required
                                placeholder='Gebe hier deine E-Mail Adresse ein'
                            />

                            <span>
                                <p > <input id='same' type='checkbox' required className='in' />
                                    <label htmlFor='same'>  Ich bin damit einverstanden, von der Küffner Group
                                        regelmäßig aktuelle Informationen per Mail zugesandt
                                        zu bekommen. Ich kann die Einwilligung jederzeit
                                        widerrufen. Details sind der Datenschutzerklärung zu
                                        entnehmen</label>
                                </p>
                            </span>
                            <button className='btn-pr' type='submit'>Eintragen</button>
                        </form>
                        <button className='close-modal' onClick={toggleModal}>
                            &times;
                        </button>
                    </div>
                </div>
            )}

        </>
    );
};

export default Navbar;
