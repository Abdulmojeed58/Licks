import React from "react";
import classes from './Animation.module.css'


const Animation = (props) => {
    return (
        <div className={`${classes.animation} ${props.className}`}>

        </div>
    )
}

export default Animation