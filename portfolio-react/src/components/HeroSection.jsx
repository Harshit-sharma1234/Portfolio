import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function HeroSection() {
    const roleRef = useRef(null)

    useEffect(() => {
        const typed = new Typed(roleRef.current, {
            strings: [
                "Full stack developer",
                "Web developer",
                "UI-UX Designer",
                "Backend developer",
                "Coder"
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 80,
            backDelay: 1000,
        })

        return () => {
            typed.destroy()
        }
    }, [])

    return (
        <div className="hero-section">
            <div className="faded-text">Harshit</div>

            <div className="hero-left">
                <div className="hero-heading">
                    Hi! Harshit Sharma
                </div>
                <div className="hero-heading hero-sub-heading">
                    I am a <span className="role" ref={roleRef}></span>
                </div>
                <div className="hero-description">
                    I am a software developer, and here is my portfolio website. Here, you will learn about my journey as a software developer.
                </div>
                <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=harshitmrsharma@gmail.com&su=Hiring%20Inquiry&body=Hi%20Harshit,%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button"
                >
                    Hire me
                    <div className="effect"></div>
                </a>
            </div>

            <div className="hero-right">
                <div className="absolute icons icon-dots">
                    <img src="/images/userAsset/dots.png" alt="" />
                </div>
                <div className="absolute icons icon-cube">
                    <img src="/images/userAsset/cube.png" alt="" />
                </div>
                <div className="absolute icons icon-circle">
                    <img src="/images/userAsset/circle.png" alt="" />
                </div>
                <div className="absolute icons icon-zigzag">
                    <img src="/images/userAsset/zigzags.png" alt="" />
                </div>
                <div className="absolute icons icon-plus">
                    <img src="/images/userAsset/plus.png" alt="" />
                </div>
                <div className="user-image">
                    <img src="/dp.jpg" alt="Harshit Sharma" />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
