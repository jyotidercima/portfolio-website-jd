import '../style/Navbar.css'
import Footer from './Footer'

import logo from "../assets/logo.png"
function Navbar() {
    return (
        <>
            <div className="sidebar">
                <img className='logo' src={logo} alt="logo" />
                <ul className='nav-lists'>
                    <li><a href="#hero">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/* <li><a href="#experience">Experience</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div className="social-links">
                    <a href="https://github.com/jyotidercima" target='_blank' rel='noopener noreferre'>GitHub</a>
                    <a href="https://linkedin.com/jyotidercima" target='_blank' rel='noopener noreferre'>LinkedIn</a>
                </div>
                <Footer />
            </div>


        </>
    )
}

export default Navbar