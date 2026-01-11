const skillLogos = [
    '/images/stack/Bash.svg',
    '/images/stack/Bootstrap.svg',
    '/images/stack/ChartJs.svg',
    '/images/stack/CSS.png',
    '/images/stack/Docker.svg',
    '/images/stack/Express.png',
    '/images/stack/Git.svg',
    '/images/stack/Github.svg',
    '/images/stack/Graphql.svg',
    '/images/stack/HTML.png',
    '/images/stack/Javascript.svg',
    '/images/stack/K8s.svg',
    '/images/stack/MaterialUI.svg',
    '/images/stack/MongoDB.svg',
    '/images/stack/Next.svg',
    '/images/stack/NextJsCircle.png',
    '/images/stack/NodeJs.svg',
    '/images/stack/React.png',
    '/images/stack/Redux.svg',
    '/images/stack/Saas.svg',
    '/images/stack/Tailwind.png',
    '/images/stack/Typescript.svg',
    '/images/stack/Vercel.svg',
]

function Skills() {
    return (
        <>
            <div id="skills" className="container">
                <div className="skills-container">
                    <div className="skills-container-left">
                        <h2 className="skill-heading">
                            <span className="caps">M</span>e and
                            <br />
                            My tech stack
                        </h2>
                        <div className="skill-subheading">
                            <p>Hello! My name is Harshit Sharma, and I am currently a third-year college student pursuing a B.Tech degree. Over the course of my academic journey, I have developed a strong passion for web development and data science. These fields not only fuel my curiosity but also align with my desire to build impactful, data-driven solutions.</p>
                            <br />
                            <p>Web development excites me because of its creative and ever-evolving nature. I enjoy bringing ideas to life through clean, user-friendly interfaces and efficient backends. At the same time, data science fascinates me with its power to extract meaningful insights from raw data. I have worked on several projects that combine both disciplines, allowing me to build full-stack applications that also incorporate data analysis and visualization. Through these experiences, I continue to grow as a developer who values both design and data.</p>
                            <br />
                        </div>
                    </div>
                    <div className="skills-container-right">
                        <img src="/images/userAsset/blob vector.png" className="blob-style" alt="" />
                        {skillLogos.map((logo, index) => (
                            <img key={index} src={logo} alt="" className="skills-logo" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="fadetext">
                <div className="skill-fade-text">Skills</div>
            </div>
        </>
    )
}

export default Skills
