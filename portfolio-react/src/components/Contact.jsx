function Contact() {
    return (
        <section id="contact" className="py-16 md:py-24 bg-gray-200 dark:bg-gray-800 transition-colors duration-300">
            <div className="max-w-2xl mx-auto px-6 md:px-12">
                <h2 className="text-4xl md:text-5xl font-bold text-[#dc2626] mb-2">
                    Contact me
                </h2>
                <p className="text-lg md:text-xl text-[#343d68]/70 dark:text-gray-400 mb-8">
                    Questions, thoughts, or just want to say hello?
                </p>

                <form
                    action="https://formspree.io/f/mzzrnvzo"
                    method="POST"
                    className="flex flex-col gap-4"
                >
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        aria-label="Enter your name"
                        className="w-full px-5 py-4 text-base bg-white dark:bg-gray-700 
                                   text-[#343d68] dark:text-white placeholder-[#343d68]/50 dark:placeholder-gray-400
                                   rounded-lg border border-gray-300 dark:border-gray-600
                                   focus:outline-none focus:ring-2 focus:ring-[#778ae8] focus:border-transparent
                                   transition-all duration-300"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        aria-label="Enter your email address"
                        className="w-full px-5 py-4 text-base bg-white dark:bg-gray-700 
                                   text-[#343d68] dark:text-white placeholder-[#343d68]/50 dark:placeholder-gray-400
                                   rounded-lg border border-gray-300 dark:border-gray-600
                                   focus:outline-none focus:ring-2 focus:ring-[#778ae8] focus:border-transparent
                                   transition-all duration-300"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Enter your subject"
                        aria-label="Enter your subject"
                        className="w-full px-5 py-4 text-base bg-white dark:bg-gray-700 
                                   text-[#343d68] dark:text-white placeholder-[#343d68]/50 dark:placeholder-gray-400
                                   rounded-lg border border-gray-300 dark:border-gray-600
                                   focus:outline-none focus:ring-2 focus:ring-[#778ae8] focus:border-transparent
                                   transition-all duration-300"
                    />
                    <textarea
                        name="message"
                        rows="6"
                        placeholder="Enter your message"
                        aria-label="Enter your message"
                        className="w-full px-5 py-4 text-base bg-white dark:bg-gray-700 
                                   text-[#343d68] dark:text-white placeholder-[#343d68]/50 dark:placeholder-gray-400
                                   rounded-lg border border-gray-300 dark:border-gray-600
                                   focus:outline-none focus:ring-2 focus:ring-[#778ae8] focus:border-transparent
                                   transition-all duration-300 resize-y min-h-[150px]"
                        required
                    ></textarea>

                    <div className="flex justify-end mt-2">
                        <button type="submit" className="btn-primary px-8 py-4 text-base">
                            Send Message
                            <i className="fa-solid fa-paper-plane ml-2"></i>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
