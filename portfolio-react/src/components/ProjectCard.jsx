function ProjectCard({ id, number, title, description, skills, githubLink, liveLink, alignment }) {
    const isLeft = alignment === 'left'

    return (
        <div className="project-card" id={id}>
            <div className={`Project-number ${isLeft ? 'Project-number-left' : 'Project-number-right'}`}>
                {number}
            </div>
            <div className={`project-content ${isLeft ? 'project-content-left' : 'project-content-right'}`}>
                <div className="project-skills-container">
                    {skills.map((skill, index) => (
                        <img key={index} className="project-skill" src={skill} alt="" />
                    ))}
                </div>
                <h2 className="project-heading">{title}</h2>
                <div className="project-subheading">{description}</div>
                <div className="btn-grp">
                    <div className="button btn-group-button">
                        Read More
                        <div className="effect"></div>
                    </div>
                    <a href={githubLink}>
                        <i title="GithubLink" className="fa-brands fa-github icon"></i>
                    </a>
                    <a href={liveLink}>
                        <i title="Live Link" className="fa-solid fa-link icon"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
