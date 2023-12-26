import React from "react";
import Styles from "./styles.module.css"
import CodeIcon from "../../assets/codeIcon.png"
import DBIcon from "../../assets/dbIcon.png"
import EditorIcon from "../../assets/editorIcon.png"
import DevIcon from "../../assets/devOpsIcon.png"

const SkillCard = (props) => {

const image = () => {
    switch(props.image){
        case 1: return  <img className={ Styles.image } src={ CodeIcon } alt=""/>
        case 2: return  <img className={ Styles.image } src={ DBIcon } alt=""/>
        case 3: return  <img className={ Styles.image } src={ EditorIcon } alt=""/>
        default: return  <img className={ Styles.image } src={ DevIcon } alt=""/>
    }
}

return (
    <div className={ Styles.skillCard }>
       { image() }
        <h3>{ props.title }</h3>
        <p> { props.text} </p>
    </div>
)
}

export default SkillCard