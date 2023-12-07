import React, { useRef } from "react";
import Styles from './styles.module.css'
import NavBar from "../../components/navBar/Index";
import LaptopFire from "../../assets/laptopFire.png"
import MattImage from "../../assets/mattImage.png"
import SkillCard from "../../components/skillsCard/Index";
import Section from "./Section";

const Landing = () => {

    const topContentRef = useRef(null);
    const skillsSectionRef = useRef(null);
    const aboutSectionRef = useRef(null);

    return (
        <div>
            <NavBar
                sections={{ topContent: topContentRef, skillsSection: skillsSectionRef, aboutSection: aboutSectionRef, }}
            />
            <Section className={Styles.topContent} ref={topContentRef}>
                <div className={ Styles.topTextSection }>
                    <div className={Styles.topText}>
                    <p className={ Styles.helloText }>Hello, I'm Matt</p>
                    <h1 className={ Styles.topMainText }>A <span className={ Styles.greenSpan }>full-stack </span>developer based in London</h1>
                    <p className={ Styles.topSkills }>Drawing on 3 years of expertise in front-end and back-end development,<br/>I craft innovative applications for both mobile and web</p>
                    </div>
                </div>
                <img className={ Styles.topImage } src={LaptopFire} alt="fire" />
            </Section>
            <Section ref={skillsSectionRef} className={ Styles.skillsSection }>
                <p>My skills</p>
                <p className={ Styles.largeTitle }>Technical Expertise</p>
                <div className={ Styles.skillCards }>
                    <SkillCard text = ""/>
                    <SkillCard text = ""/>
                    <SkillCard text = ""/>
                    <SkillCard text = ""/>
                </div>
            </Section>
            <Section ref={aboutSectionRef} className={Styles.aboutSection}>
            <div className={ Styles.aboutData }>
                <img className={ Styles.mattImage } src={ MattImage } alt="Matt Hall" />
                <div className={ Styles.aboutText }>
                <p>About</p>
                <p className={ Styles.largeTitle }>About me</p>
                <p  className={ Styles.aboutMainText }>
                    In 2019, I decided to leave my 10+ years of experience in network security behind me to dive into the world of software development. I began with mobile app development utilising the Swift for IoS programming language and both the SwiftUI and UIKit frameworks for front-end and both PhP and mySQL for backend, and I'm proud to have launched multiple apps on the Apple App Store.<br/><br/>
                    Today, I'm focused more on web development, delving into technologies like HTML/CSS, JavaScript, Node.js and React. My current project involves building a web3 job search and recruitment platform for a Web3.0 platform.<br/><br/>
                    I'm now actively seeking remote junior roles in software development, with a strong desire for mentoring and growth.<br/><br/>
                    Let's connect!
                    <br/><br/>
                    <a href="https://github.com/mhallrp">🐱 GitHub</a><br/>
                    <a href="https://www.linkedin.com/in/mhallrp">💼 LinkedIn</a><br/>
                    <a href="mailto:hello@matthall.london">📧 hello@matthall.london</a>
                </p>
                </div>
                </div>
            </Section>
            <Section className={ Styles.footer }></Section>

        </div>
    );
};

export default Landing;
