import React, { useEffect, useState } from "react";
import Styles from './styles.module.css'

function NavBar() {
    const [navBarHeight, setNavBarHeight] = useState(100); // Initial height

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const newHeight = Math.max(60, 100 - scrollY / 5); // Calculate the new height
            setNavBarHeight(newHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={ Styles.navBar } style={ { height: `${navBarHeight}px` } }>
    <div className={ Styles.navSection }>
        <div className={ Styles.leftSection }>
            <h1 className={ Styles.navTitle } >Matt Hall</h1>
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