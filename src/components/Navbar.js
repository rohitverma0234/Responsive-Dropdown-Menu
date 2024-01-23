import React, { useState } from 'react'
import "./navbar.css"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className='main-nav'>
                <div className='logo'>
                    <h2>
                        <span>R</span>ohit
                        <span>V</span>erma
                    </h2>
                </div>

                <div className= {showMediaIcons ? 'menu-link mobile-menu-link' : 'menu-link'}>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>

                        <li>
                            <a href='/'>About</a>
                            <ul className='drop-down'>
                                <li><a href='/'>Portfolio</a></li>
                                <li><a href='/'>Teams</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href='/'>Services</a>
                            <ul className='drop-down'>
                                <li><a href='/'>Portfolio</a></li>
                                <li><a href='/'>Teams</a></li>
                                <li><a href='/'>Portfolio</a></li>
                                <li><a href='/'>Teams</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href='/'>Contact</a>
                        </li>
                    </ul>
                </div>

                <div className='social-media'>
                    <ul className='social-media-desktop'>
                        <li>
                            <a href='/' target="_rohit"><FaFacebook className='facebook' /></a>
                        </li>

                        <li>
                            <a href='/' target="_rohit"><FaInstagram className='instagram' /></a>
                        </li>

                        <li>
                            <a href='/' target="_rohit"><FaYoutube className='youtube' /></a>
                        </li>
                    </ul>


                    <div className='hamburger-menu'>
                        <a href='#' onClick={()=>setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>

                </div>
            </nav>

            <section className='hero-section'>
                <p>Welcome</p>
            </section>
        </>
    )
}

export default Navbar