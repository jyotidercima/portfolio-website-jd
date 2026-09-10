import profileImage from "../assets/photo_self-1.png"
// import './Hero.css'

function Hero() {
    return (
        <>
            <section id="hero" className="hero-section sections" >
                <section className="content-hero">
                    <h1>Hi, I'am Jyoti Dercima</h1>
                    <h2>Full Stack Web Developer</h2>

                    <p className="hero-description">I build responsive web applications while continuously learning and improving my skills.</p>

                    <p className="hero-code">
                        &lt;code&gt; Building. Learning. Growing. &lt;/code&gt;
                    </p>

                    <div className="hero-buttons">
                        <a href="#resume">Resume</a>
                        <a href="#contact">Connect with me</a>

                    </div>
                </section>


                <img src={profileImage} alt="photo-jd" />
            </section>
        </>
    )
}

export default Hero;