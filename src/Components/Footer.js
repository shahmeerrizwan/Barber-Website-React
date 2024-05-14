import React from 'react'
import fb from '../Images/fb.png';
import twi from '../Images/twi5.png';
import ins from '../Images/ins1.jpg';
import lin from '../Images/lin5.png';

export default function Footer() {
    return (
        <div id="footer" className="myfooter">
            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">About Us</h3>
                    <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus natus earum non molestias suscipit</p>
                    <a href="/"><img src={fb} alt="social media" /></a>
                    <a href="/"><img src={twi} alt="social media" /></a>
                    <a href="/"><img src={ins} alt="social media" /></a>
                    <a href="/"><img src={lin} alt="social media" /></a>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Opening Hours</h3>
                    <p className="text">Tuesday to Friday: 12PM to 10PM</p>
                    <p className="text">Saturday: 12PM to 12AM</p>
                    <p className="text">Sunday: 12PM to 12AM</p>
                </div>
            </div>

            <div className="card">
                <br />
                <div className="card-body">
                    <h3 className="card-title">Contact Info</h3>
                    <p className="text">Address: Shahrah-e-faisal near FTC, Karachi</p>
                    <p className="text">Phone: 03243217819</p>
                    <p className="text">Email: Shahmeerrizwan921@gmail.com</p>
                </div>
            </div>

            <div><br /><br />
                <p id="rights">All rights reserved | This template is made by Shahmeer Rizwan</p><br />
            </div>

        </div>
    )
}
