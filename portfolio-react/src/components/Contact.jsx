function Contact() {
    return (
        <div className="contact-container" id="Contactme">
            <div className="container">
                <h1 className="contact-heading">Contact me</h1>
                <h3 className="contact-subheading">Questions, thoughts, or just want to say hello?</h3>
                <div className="contact-form">
                    <form action="https://formspree.io/f/mzzrnvzo" method="POST" className="form">
                        <div className="formfield-container">
                            <input
                                className="formfield"
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                            />
                            <input
                                className="formfield"
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                            />
                            <input
                                className="formfield"
                                type="text"
                                name="subject"
                                placeholder="Enter your subject"
                            />
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                className="formfield formfield-textarea"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button type="submit" className="button contact-button">
                            Send Message <i className="submit-icon fa-solid fa-paper-plane"></i>
                            <div className="effect contact-effect"></div>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
