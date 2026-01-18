import { SKILL_LOGOS } from '../data/constants'

function Skills() {
    return (
        <section id="skills" className="py-16 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left - Text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#dc2626] mb-4">
                            <span className="text-6xl md:text-7xl lg:text-8xl">S</span>kills
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-md mx-auto lg:mx-0">
                            I help business owners and startups turn their ideas into high-quality websites
                            that reflect their vision and drive results.
                        </p>
                    </div>

                    {/* Right - Skills Grid */}
                    <div className="flex-1 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4 md:gap-6">
                        {SKILL_LOGOS.map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center p-2 
                                           animate-fade-in-up hover:scale-110 hover:rotate-3 
                                           transition-transform duration-300"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                <img
                                    src={skill.src}
                                    alt={skill.alt}
                                    className="w-12 h-12 md:w-16 md:h-16 object-contain
                                               hover:drop-shadow-lg transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills
