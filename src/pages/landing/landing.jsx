import React, { useEffect, useState } from "react";
import Styles from './styles.module.css'
import NavBar from "../../components/navBar";
import LaptopFire from "../../assets/laptopFire.png"
import SkillCard from "../../components/skillsCard";

function Landing(){

    const [skillsSectionHeight, setSkillsSectionHeight] = useState(0);

    const scrollToSection = (e) => {

        const sections = [Styles.topContent ,Styles.skillsSection]
        const skillsSection = document.querySelector(`.${ sections[e] }`);
        if (skillsSection) {
            const navbarHeight = 100;
            const targetScrollPosition = skillsSection.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({
                top: targetScrollPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const updateSkillsSectionHeight = () => {
            const skillsSection = document.querySelector(`.${Styles.skillsSection}`);
            const newSkillsSectionHeight = skillsSection.offsetHeight;
            if (newSkillsSectionHeight !== skillsSectionHeight) {
                setSkillsSectionHeight(newSkillsSectionHeight);
            }
        };
        // Initial update
        updateSkillsSectionHeight();
        // Add event listener for resize
        window.addEventListener('resize', updateSkillsSectionHeight);
        return () => {
            // Remove event listener when the component unmounts
            window.removeEventListener('resize', updateSkillsSectionHeight);
        };
    }, [skillsSectionHeight]);   

    return (
        <div>
            <NavBar scrollToSection={ scrollToSection } skillsSectionHeight={ skillsSectionHeight }/>
            <div className={Styles.topContent} >
                <div className={ Styles.topTextSection }>
                    <div className={Styles.topText}>
                    <p className={ Styles.helloText }>Hello, I'm Matt</p>
                    <h1 className={ Styles.topMainText }>A <span className={ Styles.greenSpan }>full-stack </span>developer based in London</h1>
                    <p className={ Styles.topSkills }>Drawing on 3 years of expertise in front-end and back-end development, I craft innovative mobile and web applications</p>
                    {/* <p className={ Styles.topSkills }>HTML | CSS | Javascript | React<br/>SQL | MongoDB | NodeJS<br/>Swift | SwiftUI | UIKit</p> */}
                    </div>
                </div>
                <img className={ Styles.topImage } src={LaptopFire} alt="fire" />
            </div>

            <div className={ Styles.skillsSection }>
                <p>My skills</p>
                <p className={ Styles.skillsLargeTitle }>Technical Expertise</p>
                <div className={ Styles.skillCards }>
                    <SkillCard text = ""/>
                    <SkillCard text = ""/>
                    <SkillCard text = ""/>
                    <SkillCard text = ""/>
                </div>
            </div>

            <div className={ Styles.aboutSection }>
                <p>About</p>
                <p className={ Styles.skillsLargeTitle }>About me</p>
                <p className={ Styles.aboutText }>
                    With over a decade of experience in IT working within many different industries at companies including; Tysers (London Insurance Brokers), Cohn & Wolfe (Public Relations), and Conran Holdings (Architectural Design), I've honed my skills in enterprise network security/management, achieving Cisco CCNP/CCNA certifications along the way.<br/><br/>
                    In 2019, I embarked on a new journey, leaving IT security behind to dive into the world of software development. I began with mobile app development utilising the Swift for IoS programming language and both the SwiftUI and UIKit frameworks for front-end, and I'm proud to have launched multiple apps on the Apple App Store, such as Yatzy Blitz.<br/><br/>
                    Today, I'm focused more on web development, delving into technologies like HTML/CSS, JavaScript, Node.js and React. My current project involves building a web3 job search and recruitment platform for a Web3.0 platform.<br/><br/>
                    I'm now actively seeking remote junior roles in software development, with a strong desire for mentoring and growth.<br/><br/>
                    Let's connect!
                    <br/><br/>
                    📧 hello@matthall.london
                    🐱 https://github.com/mhallrp
                </p>
            </div>
        </div>
    )
}

export default Landing;




