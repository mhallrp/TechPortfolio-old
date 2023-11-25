import React, { useEffect } from "react";
import Styles from './styles.module.css'

function NavBar() {

    const sum = () => {
       return 1 + 1
    }

    console.log(sum())

    useEffect( () => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const navbarHeight = Math.max(60, 80 - scrollY / 3); // Calculate the new height
            document.documentElement.style.setProperty('--nav-bar-height', `${navbarHeight}px`);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={Styles.navBar}>
    <div className={ Styles.navSection }>
        <div className={ Styles.leftSection }>
            <h1 className={ Styles.navTitle } >MATT HALL</h1>
        </div>
        <div className={ Styles.centerSection }>
            <button>Home</button>
            <button>Portfolio</button>
            <button>About me</button>
            <button>Testimonials</button>
        </div>
        <div className={ Styles.rightSection }>
            <button className={ Styles.navContact } >Contact Me</button>
        </div>
    </div>
</div>
)
}

export default NavBar