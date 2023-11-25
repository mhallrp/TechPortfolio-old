import React, { useEffect, useState } from "react";
import Styles from './styles.module.css'
import NavBar from "../../components/navBar";

function Landing(){

    const [clicked, setClicked] = useState(false)

    return (
        <div>
            <NavBar></NavBar>
            <div className={ Styles.landingTop }>
            </div>
            <div className={ Styles.landingMiddle }>
                
            </div>
        </div>
    )
}

export default Landing