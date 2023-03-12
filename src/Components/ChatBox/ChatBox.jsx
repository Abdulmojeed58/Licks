import React, { useRef, useState } from "react";
import Chat from "./Chat";
import { BiSend } from "react-icons/bi";
import { RiCloseFill } from "react-icons/ri";

import classes from './ChatBox.module.css'

const ChatBox = ({ showChat, handleIsShowChat }) => {
    const [chats, setChats] = useState(['Hello, Licks.', 'mjay'])
    const ref = useRef()

    const handleChange = (e) => {
        e.preventDefault()
        const newChat = ref.current.value
        setChats((prevChats)=>(
            [...prevChats, newChat]
        ))
        ref.current.value = ''
    }

    const allChats = chats.map((chat, i)=> {
        return (
            <Chat name={chat} key={i} />
        )
    })

    return (
        <section className={showChat ? `${classes.chatBox} ${classes.active}` : classes.chatBox}>
            <RiCloseFill className={classes.close} onClick={handleIsShowChat} />
            <h1>Chat</h1>
            <div className={classes.allChats}>
                {chats.length > 0 ? allChats : ''}
            </div>
            <form className={classes.bottom} onSubmit={(e)=>{handleChange(e)}}>
                <textarea ref={ref}></textarea>
                <button type='submit' className={classes.sendBtn}>
                    <BiSend className={classes.sendIcon} />
                </button>
            </form>
        </section>
    )
}

export default ChatBox
