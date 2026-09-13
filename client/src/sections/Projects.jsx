import '../style/Project.css'
import ProjectCard from './ProjectCard';
import project1 from '../assets/ssportfolio2.png'
import project2 from '../assets/ssportfolio1.png'
import project3 from '../assets/ssproject3.png'


function Projects() {
    const Projects = [
        {
            image: project1,
            title: "GFG Nation skillup program projects",
            description: " This is my Learning Journey with full stack development course with GeeksforGeeks ",
            technologies: ["html", "css", , "javascript", "react", "EJS"],
            github: "https://github.com/jyotidercima/gfg-nationskillup-full-stack-development",
            live: "https://jyotidercima.github.io/gfg-nationskillup-full-stack-development/"
        },
        {
            image: project2,

            title: "freecodecamp portfolio website",
            description: "I have created a portfolio website using grids showing projects for now its simple webpage where you can view my projects",
            technologies: ["html", "css"],
            github: "https://github.com/jyotidercima/portfolio-webpage-freecodecamp",
            live: "https://portfolio-webpage-freecodecamp.vercel.app/"
        },
        {
            image: project3,

            title: "Product landing page",
            description: "Product landing page for a key chain camera",
            technologies: ["html", "css"],
            github: "https://github.com/jyotidercima/product-landing-page-freecodecamp",
            live: "https://product-landing-page-freecodecamp-phi.vercel.app/"
        },

    ];

    return (
        <>

            <section id="projects" className="projects sections">
                {/* <div className="projects-section"> */}
                <div className="project-heading">
                    <p className="section-subtitle">My Work</p>
                    <h2>Projects</h2>
                </div>


                <div className="projects-container">

                    {Projects.map((project) => (



                        <div key={project.title}>

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


                {/* </div> */}
            </section>
        </>
    )

}

export default Projects;