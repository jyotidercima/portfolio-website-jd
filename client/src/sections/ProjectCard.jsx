const ProjectCard = ({ title, description, technologies, image, github, live }) => {
    return (
        <div className="project-card">
            {image && <img src={image} alt={title} className="project-image" />}
            {/* If image exist show image if not show anything */}
            <h3>{title}</h3>
            <p>{description}</p>

            <div className="project-technologies">
                {technologies.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            {/* <p><span>{technologies}</span></p> */}

            <div className="project-links">
                <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href={live} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>


        </div>
    )
}

export default ProjectCard;