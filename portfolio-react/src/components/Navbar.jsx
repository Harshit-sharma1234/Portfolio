function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="w-full px-6 py-4 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto flex justify-between items-center md:grid md:grid-cols-3">
                {/* Logo */}
                <a href="#" className="flex items-center gap-1 text-xl md:text-2xl font-semibold text-[#343d68] dark:text-white justify-self-start">
                    <span className="text-4xl md:text-5xl font-bold">H</span>
                    <span>arshit Sharma</span>
                </a>

                {/* Nav Items */}
                <div className="hidden md:flex items-center justify-center gap-8 justify-self-center">
                    <a
                        href="#projects"
                        className="relative text-[#343d68] dark:text-gray-200 hover:text-[#dc2626] transition-colors duration-300
                                   after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#dc2626] 
                                   after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right 
                                   after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                    >
                        Projects
                    </a>
                    <a
                        href="#skills"
                        className="relative text-[#343d68] dark:text-gray-200 hover:text-[#dc2626] transition-colors duration-300
                                   after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#dc2626] 
                                   after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right 
                                   after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                    >
                        Skills
                    </a>
                    <a
                        href="#contact"
                        className="relative text-[#343d68] dark:text-gray-200 hover:text-[#dc2626] transition-colors duration-300
                                   after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-[#dc2626] 
                                   after:left-0 after:-bottom-1 after:scale-x-0 after:origin-right 
                                   after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
                    >
                        Contact Me
                    </a>
                </div>

                {/* Dark Mode Toggle */}
                <div className="flex justify-end justify-self-end">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                            className="sr-only peer"
                        />
                        <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none rounded-full peer 
                                        dark:bg-gray-600 peer-checked:after:translate-x-7 
                                        after:content-[''] after:absolute after:top-0.5 after:left-0.5 
                                        after:bg-white after:rounded-full after:h-6 after:w-6 
                                        after:transition-all duration-300">
                        </div>
                        <span className="ml-2 text-lg">
                            {darkMode ? '🌙' : '☀️'}
                        </span>
                    </label>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
