import React, { useEffect, useState } from "react";
import Styles from './styles.module.css'
import NavBar from "../../components/navBar";

function Landing(){

    const [clicked, setClicked] = useState(false)

    return (
        <div>
            <NavBar></NavBar>
            <div className={ Styles.landingTop }>
                <div className={Styles.topIntro}>
                    <div><h1>ABOUT ME</h1></div>
                    <div><h1>IMAGE</h1></div>
                </div>
            </div>
            <div className={ Styles.landingMiddle }>
            <div className={Styles.middleSkills}>
                    <div><h1>ABOUT ME</h1></div>
                    <div><h1>IMAGE</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Landing