import React from "react";

import classes from './Discount.module.css';

const Discount = ({image, name}) => {
    return (
        <div className={classes.discount}>
            <div className={classes.image}>
                <img src={image} alt={name} />
            </div>
            <div className={classes.bottom}>
                <h3>{name}</h3>
                <p>2 days to go</p>
            </div>
            <p>Order now</p>
        </div>
    )
}

export default Discount