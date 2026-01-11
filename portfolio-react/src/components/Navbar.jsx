import { useState, useEffect } from 'react'

function Navbar({ darkMode, setDarkMode }) {
    return (
        <div className="navbar">
            <div className="logo-container">
                <img src="/images/userAsset/Screenshot 2024-07-19 173103.png" className="logo" alt="Logo" />
                <div className="logo-text">arshit Sharma</div>
            </div>
            <div className="nav-items">
                <div><a href="#projects">Projects</a></div>
                <div><a href="#skills">Skills</a></div>
                <div><a href="#Contactme">Contact Me</a></div>
                <div className="dark-mode-toggle">
                    <input
                        type="checkbox"
                        id="dark-mode-toggle"
                        checked={darkMode}
                        onChange={() => setDarkMode(!darkMode)}
                        aria-label="Toggle dark mode"
                    />
                    <label htmlFor="dark-mode-toggle" className="toggle-label">
                        <i className="fas fa-sun"></i>
                        <i className="fas fa-moon"></i>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default Navbar
