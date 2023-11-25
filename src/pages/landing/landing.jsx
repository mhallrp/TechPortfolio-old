import React, { useEffect, useState } from "react";
import Styles from './styles.module.css'
import NavBar from "../../components/navBar";
import LaptopFire from "../../assets/laptopFire.png"

function Landing(){

    const [clicked, setClicked] = useState(false)

    return (
        <div>
            <NavBar></NavBar>
            <div className={Styles.topContent}>
                <div className={ Styles.topTextSection }>
                    <p className={ Styles.helloText }>Hello, I'm Matt</p>
                    <h1>A <span className={ Styles.greenSpan }>full-stack </span><br/>developer based<br/>in London</h1>
                    <p className={ Styles.skillsSpan }>HTML | NodeJS | Javascript | Swift<br/>CSS | SwiftUI/UIKit | React<br/>SQL | MongoDB </p>
                </div>
                <div className={ Styles.topImageSection }>
                    <img className={ Styles.topImage } src={LaptopFire} alt="fire" />
                </div>
            </div>
            <div className={ Styles.landingMiddle }>
                <div className={Styles.middleSkills}>

                </div>
            </div> 
        </div>
    )
}

export default Landing;




