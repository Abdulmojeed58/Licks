import React from "react";
import classes from './Chat.module.css';

const Chat = ({name}) => {
    return (
        <div className={classes.chat}>{name}</div>
    )
}

export default Chat