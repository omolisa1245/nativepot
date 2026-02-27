import React from 'react'
import './Footer.css'
import logo from "../../assets/logo.png"
import executive2 from "../../assets/executive2.webp"
import { IoMdTimer } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="footer-holder">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                        <span>Native<p>Pot</p></span>
                    </div>
                    <div className="footer-content-details">
                        <p>The best food technology is now a reality. Special cooking and delivery technologies
                            allow you to buy fresh and healthy food. Experienced chefs and professional couriers.
                        </p>
                        <h4>164, Awoyaya road, Ibeju-Lekki, Lagos.</h4>
                        <h6>nativefood@gmail.com</h6>
                        <span>+2348055380547</span>
                    </div>
                </div>
                <div className="footer-content-link">
                    <h3>QUICK LINK</h3>
                    <ul>
                        <li>About us</li>
                        <li>Menu</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-content-date">
                    <h3>OPENING HOURS</h3>
                    <div className="datetime">
                        <IoMdTimer className='date-image' />
                        <div className="datetime-details">
                            <span>Launch Time</span>
                            <p>Mon - Saturday : 11am to 2pm</p>
                        </div>
                    </div>
                    <div className="datetime">
                        <IoMdTimer className='date-image' />
                        <div className="datetime-details">
                            <span>Dinner Time</span>
                            <p>Mon - Saturday : 3pm to 8pm</p>
                        </div>
                    </div>
                </div>
                <div className="footer-input-details">
                    <h3>SOCIAL LINKS</h3>
                    <div className="footer-input">
                        <input type="text" placeholder='Enter your promo code here' />
                        <button>Submit</button>
                    </div>
                    <div className="footer-socials-main">
                        <div className="footer-top-right">
                            <FaInstagram className='footer-app' />
                            <FaXTwitter className='footer-app' />
                            <FaFacebook className='footer-app' />
                            <FaLinkedin className='footer-app' />
                            <FaPinterest className='footer-app' />
                        </div>
                        <img src={executive2} alt="" />
                    </div>
                </div>
            </div>

            <div className="footer-below">
                <span>NativePot © 2025. All Rights Reserved.</span>
            </div>
        </div>
    )
}

export default Footer