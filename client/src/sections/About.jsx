import '../style/About.css'


function AboutMe() {
    return (
        <>  <section id="about" className="about sections">


            <h2 className="section-subtitle">Get To Know Me</h2>
            <p>About me</p>

            <div className="about-content">

                <p>
                    I am Jyoti Dercima, a BCA Graduate and Full Stack Web Developer. I enjoy building web applications and learning more about technologies that help me turn ideas into practical projects.
                </p>
                <p>
                    My current focus is on strengthening my skills in Javascript and MERN Stack as a whole while building projects that imporve my understanding though practice.
                </p>
                <p>
                    I'm continuously learning, building, and looking for opportunities where I can contribute and grow as a developer.
                </p>

                <div className="about-highlights">
                    <div>
                        <strong>BCA Graduate</strong>
                        <span>Computer Science Background</span>
                    </div>
                    <div>
                        <strong>Full Stack</strong>
                        <span>Web Development</span>
                    </div>
                    <div>
                        <strong>Currently</strong>
                        <span>Learning by building</span>
                    </div>
                </div>

            </div>
        </section>
        </>
    )
}

export default AboutMe;