import ProjectCard from './ProjectCard'

const projectSkills = [
    '/images/stack/Bash.svg',
    '/images/stack/CSS.png',
    '/images/stack/Javascript.svg',
    '/images/stack/Express.png',
    '/images/stack/NextJsCircle.png',
    '/images/stack/Tailwind.png',
    '/images/stack/NodeJs.svg',
    '/images/stack/Redux.svg',
    '/images/stack/Vercel.svg',
    '/images/stack/MongoDB.svg',
]

const projects = [
    {
        id: 'Project-1',
        number: '01',
        title: 'Tint & Orange',
        description: 'It is a car modification company which provides you sheets to protect your car from scratch',
        skills: projectSkills,
        githubLink: '',
        liveLink: '',
        alignment: 'left'
    },
    {
        id: 'Project-2',
        number: '02',
        title: 'Tint & Orange',
        description: 'It is a car modification company which provides you sheets to protect your car from scratch',
        skills: projectSkills,
        githubLink: '',
        liveLink: '',
        alignment: 'right'
    },
    {
        id: 'Project-3',
        number: '03',
        title: 'Tint & Orange',
        description: 'It is a car modification company which provides you sheets to protect your car from scratch',
        skills: projectSkills,
        githubLink: '',
        liveLink: '',
        alignment: 'left'
    },
    {
        id: 'Project-4',
        number: '04',
        title: 'Tint & Orange',
        description: 'It is a car modification company which provides you sheets to protect your car from scratch',
        skills: projectSkills,
        githubLink: '',
        liveLink: '',
        alignment: 'right'
    }
]

function Projects() {
    return (
        <div className="project-section" id="projects">
            <h2 className="page-header">Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <ProjectCard key={project.id} {...project} />
                ))}
            </div>
        </div>
    )
}

export default Projects
