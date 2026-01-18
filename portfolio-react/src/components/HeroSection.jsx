import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { HERO_ROLES, MAILTO_LINK } from '../data/constants'

function HeroSection() {
    const roleRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(roleRef.current, {
            strings: HERO_ROLES,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        })

        return () => typed.destroy()
    }, [])

    return (
        <section className="relative w-full min-h-[calc(100vh-80px)] px-[10%] py-16 overflow-hidden">
            {/* Floating Background Shapes */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute w-20 h-20 border-3 border-[#778ae8]/30 rounded-full top-[15%] left-[5%] animate-float"></div>
                <div className="absolute w-10 h-10 bg-[#dc2626]/30 rounded-full top-[70%] left-[15%] animate-float-reverse"></div>
                <div className="absolute w-12 h-12 border-3 border-[#343d68]/30 rotate-45 top-[25%] left-[45%] animate-float"></div>
                <div className="absolute w-8 h-8 bg-[#778ae8]/30 rounded rotate-12 bottom-[20%] left-[35%] animate-float-reverse"></div>
                <div className="absolute w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#dc2626]/30 top-[60%] left-[8%] animate-float"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-20">
                {/* Left - Text Content */}
                <div className="flex-1 flex flex-col gap-6 animate-fade-in-up text-center lg:text-left max-w-[600px]">
                    <h2 className="text-2xl md:text-3xl text-[#343d68] dark:text-gray-200 font-medium">
                        Hi! Harshit Sharma
                    </h2>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#343d68] dark:text-gray-100 leading-tight">
                        I am a <span className="text-[#778ae8]" ref={roleRef}></span>
                    </h1>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
                        I am a software developer, and here is my portfolio website. Here, you will learn about my journey as a software developer.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <a
                            href={MAILTO_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-6 py-4 text-lg"
                        >
                            Hire me
                        </a>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="flex-1 flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <div className="relative">
                        {/* Decorative elements around image - Matching background shapes */}
                        <div className="absolute -top-6 -right-6 z-20 animate-float">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="2" y="2" width="36" height="36" stroke="#dc2626" strokeWidth="2" fill="none" />
                            </svg>
                        </div>
                        <div className="absolute -bottom-4 -left-4 z-20 animate-float-reverse">
                            <div className="w-8 h-8 rounded-full border-2 border-[#778ae8] bg-transparent"></div>
                        </div>
                        <div className="absolute bottom-10 -right-10 z-20 animate-float">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 bg-[#dc2626] rounded-full"></div>
                                <div className="w-2 h-2 bg-[#dc2626] rounded-full"></div>
                                <div className="w-2 h-2 bg-[#dc2626] rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute -top-4 left-0 z-20 animate-float">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
                                <path d="M0 10 L5 0 L10 10 L15 0 L20 10" stroke="#778ae8" strokeWidth="2" />
                            </svg>
                        </div>
                        <div className="absolute top-6 right-8 z-20 animate-float-reverse">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12 0V24 M0 12H24" stroke="#343d68" strokeWidth="3" />
                            </svg>
                        </div>

                        {/* Main Image */}
                        <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] 
                                        transition-colors duration-500">
                            <img
                                src="/hero-image.jpg"
                                alt="Harshit Sharma"
                                className="w-full h-full object-cover animate-scale-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
