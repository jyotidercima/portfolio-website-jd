import profileImage from "../assets/photo_self-1.png"
// import './Hero.css'

function Hero() {
    return (
        <>
            <section className="hero-section sections">
                <section className="content-hero">
                    <h1>Hi, I'am Jyoti</h1>
                    <h3>Full Stack Web Developer</h3>

                    <p>I build responsive web applications while continuously learning and improving my skills.</p>
                    <div className="hero-button">
                        <button>View My Projects</button>
                        <button>Resume</button>
                    </div>
                </section>


                <img src={profileImage} alt="photo-jd" />
            </section>
        </>
    )
}

export default Hero;