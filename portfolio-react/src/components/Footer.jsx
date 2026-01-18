function Footer() {
    return (
        <footer className="py-8 bg-[#343d68] dark:bg-gray-950 text-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo/Name */}
                    <div className="text-xl font-semibold">
                        <span className="text-3xl font-bold">H</span>arshit Sharma
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/harshit-sharma1234"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-[#dc2626] transition-colors duration-300"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>
                        <a
                            href="https://linkedin.com/in/harshit-sharma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-[#dc2626] transition-colors duration-300"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                        <a
                            href="https://twitter.com/harshit_sharma"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-2xl hover:text-[#dc2626] transition-colors duration-300"
                        >
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a
                            href="mailto:harshitmrsharma@gmail.com"
                            className="text-2xl hover:text-[#dc2626] transition-colors duration-300"
                        >
                            <i className="fa-solid fa-envelope"></i>
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Harshit Sharma. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
