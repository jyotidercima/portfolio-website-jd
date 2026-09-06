import profileImage from "../assets/photo_self-1.png"

function Hero() {
    return (
        <>
            <h1>Hi, I'am Jyoti</h1>
            <h3>Full Stack Web Developer</h3>

            <p>I build responsive web applications while continuously learning and improving my skills.</p>
            <button>View My Projects</button>
            <a href="download">Resume</a>
            <img src={profileImage} alt="photo-jd" />
        </>
    )
}

export default Hero;