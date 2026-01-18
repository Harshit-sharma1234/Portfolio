import ProjectCard from './ProjectCard'
import { PROJECTS_DATA } from '../data/constants'

function Projects() {
    return (
        <section id="projects" className="py-16 md:py-24 bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#dc2626] text-center mb-16 md:mb-24">
                    Projects
                </h2>
                <div className="flex flex-col gap-16 md:gap-24">
                    {PROJECTS_DATA.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            {...project}
                            alignment={index % 2 === 0 ? 'left' : 'right'}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
