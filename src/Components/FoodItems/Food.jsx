import React from "react";
import classes from './Food.module.css';


const Food = (props) =>{
    return (
        <>
            <div className={classes.foodImageContainer}>
                <img src={props.image} alt={props.name} />
            </div>
            <p>{props.name}</p>
        </>
    )
}

export default Food