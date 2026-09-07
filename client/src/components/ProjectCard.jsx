const ProjectCard = ({ title, description, technologies, image, github, live }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <p><span>{technologies}</span></p>

            <div className="project-link">
                <a href={github}>GitHub</a>
                <a href={live}>Live Demo</a>
            </div>


        </div>
    )
}

export default ProjectCard;