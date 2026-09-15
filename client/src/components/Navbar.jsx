import React, { useState } from "react";
import '../style/Navbar.css'
import Footer from './Footer'

import logo from "../assets/logo.png"
function Navbar() {

    const [menuOpen, setMenuOpen] = useState(true);




    return (
        <>
            <div className="sidebar">
                <img className='logo' src={logo} alt="logo" onClick={() => setMenuOpen(!menuOpen)}
                ></img>
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? " X " : "O"}
                </button>

                <ul
                    className={menuOpen ? "nav-links open" : "nav-links"}

                >
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/* <li><a href="#experience">Experience</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
                {/* <div className="social-links">
                    <a href="https://github.com/jyotidercima" target='_blank' rel='noopener noreferre'>GitHub</a>
                    <a href="https://www.linkedin.com/in/jyotidercima/" target='_blank' rel='noopener noreferre'>LinkedIn</a>
                </div> */}
                <Footer />
            </div >


        </>
    )
}

export default Navbar