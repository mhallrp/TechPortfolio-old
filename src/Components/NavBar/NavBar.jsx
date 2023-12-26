import React, { useEffect, useState } from "react";
import Styles from './styles.module.css';

const NavBar = (props) => {

    const [navbarHeight, setNavbarHeight] = useState(80);
    const [activeSection, setActiveSection] = useState("topContent");

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            let newActiveSection = null;
            for (const sectionName in props.sections) {
                const sectionRef = props.sections[sectionName];
                if (sectionRef && sectionRef.current) {
                    const sectionTop = sectionRef.current.getBoundingClientRect().top + window.scrollY;
                    const sectionBottom = sectionRef.current.getBoundingClientRect().bottom + window.scrollY;
                    if (window.scrollY >= sectionTop - scrollY / 2 && window.scrollY < sectionBottom) {
                        newActiveSection = sectionName;
                    }
                }
            }
            setActiveSection(newActiveSection);
            const newNavbarHeight = Math.max(60, 80 - scrollY / 3);
            setNavbarHeight(newNavbarHeight);
        };
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => { 
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll); 
        };
    }, [props.sections]);

    const scrollTo = (sectionName) => {
        const sectionRef = props.sections[sectionName];
        if (sectionRef && sectionRef.current) {
            const navbarHeight = 100;
            const targetScrollPosition = sectionRef.current.getBoundingClientRect().top + window.scrollY - navbarHeight;
            window.scrollTo({
                top: targetScrollPosition,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className={Styles.navBar} style={{ height: `${navbarHeight}px` }}>
            <div className={Styles.navSection}>
                <div className={Styles.leftSection}>
                    <h1 className={Styles.navTitle}>MATT HALL</h1>
                </div>
                <div className={Styles.centerSection}>
                    <button className={activeSection === "topContent" ? Styles.buttonSelected : ""} onClick={() => scrollTo("topContent")}>Home</button>
                    <button className={activeSection === "skillsSection" ? Styles.buttonSelected : ""} onClick={() => scrollTo("skillsSection")}>Skills</button>
                    <button className={activeSection === "aboutSection" ? Styles.buttonSelected : ""} onClick={() => scrollTo("aboutSection")}>About me</button>
                    <button className={activeSection === "portfolioSection" ? Styles.buttonSelected : ""} onClick={() => scrollTo("portfolioSection")}>Portfolio</button>
                </div>
                <div className={Styles.rightSection}>
                    <button className={Styles.navContact}>Contact Me</button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
