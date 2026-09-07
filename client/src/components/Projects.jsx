function Projects() {
    const Projects = [
        {
            title: "abc",
            description: " abd ",
            technologies: [],
            github: "#",
            live: "#"
        },
        {
            title: "sfgh",
            description: "cfdg",
            technologies: [],
            github: "#",
            live: "#"
        },
        {
            title: "sfsf",
            description: "dfas",
            technologies: [],
            github: "#",
            live: "#"
        },

    ];

    return (
        <>

            <section id="projects" className="projects sections">
                <p className="section-subtitle">My Work</p>

                <h2>Projects</h2>
                <div className="projects-container">
                    {Projects.map((project) => (
                        <div className="project-card" key={project.title}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            <div className="project-technologies">
                                {project.technologies.map((technology) => (
                                    <span key={technology}>{technology}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github}>Github</a>
                                <a href={project.live}>live demo</a>

                            </div>

                        </div>
                    ))}
                </div>
            </section>
        </>
    )

}

export default Projects;