import './Navbar.css'
import logo from "../assets/logo.png"
function Navbar() {
    return (
        <>
            <div className="nav-container">
                <img src={logo} height={100} alt="logo" />
                <ul className='nav-list'>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Experience</li>
                    <li>Contact</li>
                </ul>
            </div>
        </>
    )
}

export default Navbar