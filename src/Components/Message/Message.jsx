import React from "react";

import classes from './Message.module.css';

const Message = (props) => {

    return (
        <h3 className={classes.message}>{props.message}</h3>
    )
}

export default Message