import React, { useEffect, useState } from "react";
import Styles from './styles.module.css'
import NavBar from "../../components/navBar";
import LaptopFire from "../../assets/laptopFire.png"

function Landing(){

    console.log(window.screen.availHeight)

    return (
        <div>
            <NavBar></NavBar>
            <div className={Styles.topContent} >
                <div className={ Styles.topTextSection }>
                    <p className={ Styles.helloText }>Hello, I'm Matt</p>
                    <h1>A <span className={ Styles.greenSpan }>full-stack </span><br/>developer based<br/>in London</h1>
                    <p className={ Styles.skillsSpan }>HTML | CSS | Javascript | React<br/>SQL | MongoDB | NodeJS<br/>Swift | SwiftUI | UIKit</p>
                </div>
                    <img className={ Styles.topImage } src={LaptopFire} alt="fire" />
            </div>
            
            <div className={ Styles.landingFirstSection }>
                <div className={Styles.firstSkills}>
                </div>
            </div> 
            <div className={ Styles.landingSecondSection }>
                <div className={Styles.middleSkills}>
                </div>
            </div> 
            <div className={ Styles.landingThirdSection }>
                <div className={Styles.middleSkills}>
                </div>
            </div> 
        </div>
    )
}

export default Landing;




