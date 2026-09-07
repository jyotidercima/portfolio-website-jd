import './Project.css'
import ProjectCard from './ProjectCard';
// import project1 from '../assets'
// import project2 from '../assets'
// import project3 from '../assets'


function Projects() {
    const Projects = [
        {
            image: "",
            title: "abc",
            description: " abd ",
            technologies: [],
            github: "#",
            live: "#"
        },
        {
            image: "",

            title: "sfgh",
            description: "cfdg",
            technologies: [],
            github: "#",
            live: "#"
        },
        {
            image: "",

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
                <div className="projects-section">
                    <div className="project-heading">
                        <p className="section-subtitle">My Work</p>
                        <h2>Projects</h2>
                    </div>


                    <div className="projects-container">

                        {Projects.map((project) => (



                            <div className="project-card" key={project.title}>

                                <ProjectCard
                                    title={project.title}
                                    description={project.description}
                                    technologies={project.technologies}
                                    image={project.image}
                                    github={project.github}
                                    live={project.live}
                                />

                                {/* <h3>{project.title}</h3>
                                <p>{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((technology) => (
                                        <span key={technology}>{technology}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.github}>Github</a>
                                    <a href={project.live}>live demo</a>

                                </div> */}

                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </>
    )

}

export default Projects;