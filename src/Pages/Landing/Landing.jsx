import React, { useRef } from "react";
import Styles from './styles.module.css'
import NavBar from "../../Components/NavBar";
import LaptopFire from "../../assets/laptopFire.png"
import MattImage from "../../assets/mattImage.png"
import SkillCard from "../../Components/SkillsCard";

const Landing = () => {

    const topContentRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);

    return (
        <div>
            <NavBar
                sections={{ topContent: topContentRef, skillsSection: skillsSectionRef, aboutSection: aboutSectionRef, }}
            />
            <section className={Styles.topContent} ref={topContentRef}>
                <div className={ Styles.topTextSection }>
                    <div className={Styles.topText}>
                    <p className={ Styles.helloText }>Hello, I'm Matt</p>
                    <h1 className={ Styles.topMainText }>A <span className={ Styles.greenSpan }>full-stack </span>developer based in London</h1>
                    <p className={ Styles.topSkills }>Drawing on 3 years of expertise in front-end and back-end development,<br/>I craft innovative applications for both mobile and web</p>
                    </div>
                </div>
                <img className={ Styles.topImage } src={LaptopFire} alt="fire" />
            </section>
            <section ref={ skillsSectionRef } className={ Styles.skillsSection }>
                <p>My skills</p>
                <p className={ Styles.largeTitle }>Technical Expertise</p>
                <div className={ Styles.skillCards }>
                    <SkillCard image={ 1 } title="Web & Mobile" text="Expert in building responsive web and mobile apps using HTML, CSS, React, SwiftUI, UIKit, Node.js, and ExpressJS. I blend front-end design with efficient back-end processing for optimal user experiences."/>
                    <SkillCard image={ 2 } title="SQL/NoSQL" text="Skilled in MongoDB and MySQL, I specialize in creating, managing, and optimizing databases for high performance and data integrity, tailoring solutions for project-specific needs."/>
                    <SkillCard image={ 3 } title="Coding & Collaboration" text="Proficient in IDEs like Visual Studio Code and Sublime Text, and versed in Git and GitHub for version control. I ensure efficient coding and team collaboration."/>
                    <SkillCard image={ 4 } title="Design & Ops" text="Utilizing Figma for intuitive UI/UX design and Docker for streamlined DevOps, I deliver designs with technical efficiency, ensuring both aesthetics and robust functionality."/>
                </div>
            </section>
            <section ref={ aboutSectionRef } className={ Styles.aboutSection }>
                <div className={ Styles.aboutData }>
                    <img className={ Styles.mattImage } src={ MattImage } alt="Matt Hall" />
                    <div className={ Styles.aboutText }>
                    <p>About</p>
                    <p className={ Styles.largeTitle }>About me</p>
                    <p className={ Styles.aboutMainText }>
                        In 2019, I decided to leave my 10+ yearss of experience in network security behind me to dive into the world of software development. I began with mobile app development utilising the Swift for IoS programming language and both the SwiftUI and UIKit frameworks for front-end and both PhP and mySQL for backend, and I'm proud to have launched multiple apps on the Apple App Store.<br/><br/>
                        Today, I'm focused more on web development, delving into technologies like HTML/CSS, JavaScript, Node.js and React. My current project involves building a web3 job search and recruitment platform for a Web3.0 platform.<br/><br/>
                        I'm now actively seeking remote junior roles in software development, with a strong desire for mentoring and growth.<br/><br/>
                        Let's connect!
                        <br/><br/>
                        🐱 <a href="https://github.com/mhallrp">GitHub</a><br/>
                        💼 <a href="https://www.linkedin.com/in/mhallrp">LinkedIn</a><br/>
                        📧 <a href="mailto:hello@matthall.london">hello@matthall.london</a>
                    </p>
                    </div>
                </div>
            </section>
            <section className={ Styles.footer }></section>

        </div>
    );
};

export default Landing;
