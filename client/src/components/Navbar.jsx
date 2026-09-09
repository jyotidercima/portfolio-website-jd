import './Navbar.css'
import Footer from './Footer'

import logo from "../assets/logo.png"
function Navbar() {
    return (
        <>
            <div className="nav-container">
                <img className='mainlogo' src={logo} height={100} alt="logo" />
                <ul className='nav-list'>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    {/* <li><a href="#experience">Experience</a></li> */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
                {/* <Footer /> */}
            </div>


        </>
    )
}

export default Navbar