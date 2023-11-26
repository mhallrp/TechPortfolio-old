import React, { useEffect, useState } from "react";
import Styles from './styles.module.css';

function NavBar() {
    
    const [navbarHeight, setNavbarHeight] = useState(80);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const halfViewportHeight = window.innerHeight / 2;
            if (scrollY <= halfViewportHeight) {
                setActiveSection(0);
            } else if  (scrollY <= halfViewportHeight + 1000){
                setActiveSection(1);
            } else if  (scrollY <= halfViewportHeight + 2000){
                setActiveSection(2);
            } else if  (scrollY <= halfViewportHeight + 3000){
                setActiveSection(3);
            }
            const newNavbarHeight = Math.max(60, 80 - scrollY / 3);
            setNavbarHeight(newNavbarHeight);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={Styles.navBar} style={{ height: `${navbarHeight}px` }}>
            <div className={Styles.navSection}>
                <div className={Styles.leftSection}>
                    <h1 className={Styles.navTitle}>MATT HALL</h1>
                </div>
                <div className={Styles.centerSection}>
                    <button className={activeSection === 0 ? Styles.buttonSelected : ""}>Home</button>
                    <button className={activeSection === 1 ? Styles.buttonSelected : ""}>About me</button>
                    <button className={activeSection === 2 ? Styles.buttonSelected : ""}>Skills</button>
                    <button className={activeSection === 3 ? Styles.buttonSelected : ""}>Portolio</button>
                </div>
                <div className={Styles.rightSection}>
                    <button className={Styles.navContact}>Contact Me</button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
