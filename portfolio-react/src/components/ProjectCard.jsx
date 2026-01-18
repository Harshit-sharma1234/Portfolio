function ProjectCard({ id, number, title, description, skills, githubLink, liveLink, alignment, image }) {
    const isLeft = alignment === 'left'

    return (
        <div
            className={`relative w-full md:w-[calc(100%-120px)] h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-cover bg-center 
                       group transition-all duration-500 
                       ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:mr-0 md:ml-auto'}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            {/* Dark Overlay - always visible */}
            <div className="absolute inset-0 bg-[#1f1f1f]/60 dark:bg-black/70 transition-all duration-500"></div>

            {/* Blue Hover Overlay - slides in from left */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#071457] via-[#343d68]/90 to-[#343d68]/50 
                            dark:from-[#071457] dark:via-[#1a1a1a]/90 dark:to-[#1a1a1a]/60
                            transform origin-left scale-x-0 group-hover:scale-x-100 
                            transition-transform duration-500 ease-out z-[1]"></div>

            {/* Project Number - positioned inside card, appears on hover */}
            <div className={`hidden md:block absolute text-[150px] lg:text-[200px] font-bold text-white/20 
                            opacity-0 group-hover:opacity-100 transition-all duration-500 z-[2] select-none
                            top-0 ${isLeft ? 'right-4' : 'left-4'}`}>
                {number}
            </div>

            {/* Content - always bottom-left */}
            <div className="absolute left-6 md:left-8 lg:left-12 bottom-6 md:bottom-8 lg:bottom-12 p-4 text-white z-[5] 
                            transform group-hover:scale-100 md:scale-[0.95] transition-transform duration-500
                            flex flex-col gap-4 md:gap-6 w-[90%] md:w-auto">
                {/* Skills */}
                <div className="flex flex-wrap gap-2" style={{ maxWidth: '280px' }}>
                    {skills.map((skill, index) => (
                        <img
                            key={index}
                            src={skill}
                            alt=""
                            className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 object-contain"
                        />
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight">{title}</h3>

                {/* Description */}
                <p className="text-sm lg:text-base text-gray-200 italic max-w-md line-clamp-3 md:line-clamp-none">
                    {description}
                </p>

                {/* Buttons */}
                <div className="flex items-center gap-4">
                    <button className="btn-primary px-6 py-3 md:px-8 md:py-4 text-sm md:text-base lg:text-lg">
                        Read More
                    </button>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl lg:text-4xl hover:text-[#dc2626] transition-colors duration-300"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl md:text-3xl lg:text-4xl hover:text-[#dc2626] transition-colors duration-300"
                    >
                        <i className="fa-solid fa-link"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
