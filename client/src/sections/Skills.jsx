import '../style/Skills.css'

function Skills() {

    const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwing CSS"];
    const backendSkills = ["Node.js", "Express.js ", "REST APIs"];
    const databaseSkills = ["mongoDB"];
    const tools = ["GIT", "GitHub", "VS Code"];

    return (
        <>
            <section className="skill-content sections">

                <section id="skills" className="skills ">
                    <p className="section-subtitle">What I Work With</p>
                    <h2>My Skills</h2>


                    <div className="skills-container">
                        <div className="skill-category">
                            <h3>Frontend</h3>

                            <div className="skill-tags">
                                {frontendSkills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                )
                                )}
                            </div>


                        </div>
                    </div>

                    <div className="skills-container">
                        <div className="skill-category">
                            <h3>Backend</h3>
                            <div className="skill-tags">

                                {backendSkills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="skills-container">
                        <div className="skill-category">
                            <h3>Database</h3>
                            <div className="skill-tags">

                                {databaseSkills.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                )
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="skills-container">
                        <div className="skill-category">
                            <h3>Tools</h3>
                            <div className="skill-tags">

                                {tools.map((skill) => (
                                    <span key={skill}>
                                        {skill}
                                    </span>
                                )
                                )}
                            </div>
                        </div>
                    </div>


                </section>
            </section>
        </>
    )
}

export default Skills;