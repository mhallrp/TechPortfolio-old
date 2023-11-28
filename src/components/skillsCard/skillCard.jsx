import React from "react";
import Styles from "./styles.module.css"

const SkillCard = (props) => {
return (
    <div className={ Styles.skillCard }>
        <p>{ props.text }</p>
    </div>
)
}

export default SkillCard