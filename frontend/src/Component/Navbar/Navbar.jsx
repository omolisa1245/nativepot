import React, { useContext } from 'react'
import './Navbar.css'
import { FaInstagram } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import logo from "../../assets/logo.png"
import icon_profile from "../../assets/icon_profile.png"
import { FaCartShopping } from "react-icons/fa6";
import { useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import { RiMenu3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { RiHome9Line } from "react-icons/ri";
import { BsCartCheck } from "react-icons/bs"


const Navbar = ({ setShowLogin }) => {


    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [open, setOpen] = useState(false)

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };




    const navigate = useNavigate();
    const { getCartCount, token, setToken } = useContext(StoreContext);
    return (
        <div className='nav'>
            <div className="nav-top">
                <div className="nav-top-left">
                    <span>+2348055380547</span>
                    <p>Based in Lagos, Nigeria</p>

                </div>

                <div className="nav-top-middle">
                    <input type="text" placeholder='Search your favourite food..' />
                    <IoMdSearch className='nav-top-search-icon' />
                </div>

                <div className="nav-top-right">
                    <FaInstagram className='nav-social' />
                    <FaXTwitter className='nav-social' />
                    <FaFacebook className='nav-social' />
                    <FaLinkedin className='nav-social' />
                    <FaPinterest className='nav-social' />

                </div>
            </div>

            <div className="nav-bottom">
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <span>Native<p>Pot</p></span>
                </div>



                <div >
                    <ul className={`nav-main ${isSidebarOpen ? 'open' : 'closed'}`}>
                        <RxCross2 className='cross-nav' onClick={toggleSidebar} />
                        <li onClick={() => navigate('/')}><NavLink to='/'>Home</NavLink></li>
                        <li onClick={() => navigate('/About')}><NavLink to='/'>About us</NavLink></li>
                        <li onClick={() => navigate('/Blog')}><NavLink to='/'>Blog</NavLink></li>
                        <li onClick={() => navigate('/Menu')}><NavLink to='/'>Menu</NavLink></li>
                        <li onClick={() => navigate('/Contact')}><NavLink to='/'>Contact</NavLink></li>
                    </ul>

                </div>



                <div className="nav-right">
                    <div className="cart-btn">
                       
                            <BsCartCheck onClick={() => navigate('/cart')} className='cart-icon' />
                
                        <p>{getCartCount()}</p>
                    </div>


                    {localStorage.getItem("token") ?
                        <div className="profile-dropdown">
                            <div className="profile_image">
                                <img onClick={() => setOpen(!open)} src={icon_profile} alt="" />
                            </div>
                            {open && (
                                <div className="dropdown_content">
                                    <div className="adddropdown"></div>
                                    <ul>
                                        <li onClick={() => navigate('/')}><RiHome9Line className='ul_icon' />Home</li>
                                        <li onClick={() => { localStorage.removeItem("token"); window.location.replace('/') }}><FiLogOut className='ul_icon' />Logout</li>
                                    </ul>
                                </div>
                            )

                            }

                        </div>
                        :
                        <button onClick={() => setShowLogin(true)}>Login</button>
                    }



                </div>
                <RiMenu3Line className='side-bar-icon' onClick={toggleSidebar} />

            </div>
        </div>
    )
}

export default Navbar