import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";

import classes from './Explore.module.css';
import useGlobalContext from "../../GlobalContext";

const Explore = () => {
    const {handleChange} = useGlobalContext()

    return (
        <section className={classes.explore}>
            <h1>Explore our menu</h1>
            <div className={classes.topIcon}>
                <AiOutlineMenu onClick={handleChange} style={{cursor: 'pointer'}} />
                <MdNotificationsNone />
            </div>
            <div className={classes.header}>
                <div className={classes.input}>
                    <AiOutlineSearch className={classes.searchIcon} />
                    <input 
                        type='text' 
                        placeholder="Search for foods"
                    />
                </div>
                <MdFavoriteBorder className={classes.likeIcon} />
            </div>
        </section>
    )
}

export default Explore