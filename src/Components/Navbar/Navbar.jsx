import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/Logo.png";
import Profile from "../../Images/Profile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { HiShoppingCart } from "react-icons/hi2";
import { RxCountdownTimer } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { MdNotificationsNone, MdOutlineLogout, MdOutlineMoreVert, MdLocalDining } from "react-icons/md";
import { CiMenuKebab } from "react-icons/ci";

import classes from './Navbar.module.css';
import useGlobalContext from "../../GlobalContext";

const Navbar = () => {
    const {isNavBarActive, handleChange, handleIdChange, currentId} = useGlobalContext()
    // const {handleIdChange, currentId} = useGlobalContext()

    const navClass = !isNavBarActive? `${classes.navbar} ${classes.active}`: `${classes.navbar}`;



    return (
        <nav className={navClass}>
            <div className={classes.logo}>
                <img src={Logo} alt="Logo" />
            </div>
            <ul>
                <Link to='/' className={currentId === 1 ? classes.active : ''} onClick={()=>{
                    handleChange()
                    handleIdChange(1)
                }}>
                    <MdLocalDining />
                    <span>Food</span>
                </Link>
                <Link to='explore' className={currentId === 2 ? classes.active : ''} onClick={()=>{
                    handleChange()
                    handleIdChange(2)
                }}>
                    <AiOutlineSearch />
                    <span>Explore</span>
                </Link>
                <Link to='cart' className={currentId === 3 ? classes.active : ''} onClick={()=>{
                    handleChange()
                    handleIdChange(3)
                }}>
                    <HiShoppingCart />
                    <span>Cart</span>
                </Link>
                <li>
                    <RxCountdownTimer />
                    <span>Orders</span>
                </li>
            </ul>
            
            <div className={classes.line} />

            <ul>
                 <li>
                    <BsPerson />
                    <span>Profile</span>
                </li>
                <li>
                    <MdNotificationsNone />
                    <span>Notification</span>
                </li>
                <li>
                    <CiMenuKebab />
                    <span>More</span>
                </li>
                <li>
                    <MdOutlineLogout />
                    <span>Log out</span>
                </li>
            </ul>

            <div className={classes.bottom}>
                <div className={classes.profile}>
                    <img src={Profile} alt="Profile" />
                </div>
                <div>
                    <h4>Ayoola Abdulmojeed</h4>
                    <p>mojeedayoola58@gmail.com</p>
                </div>
                <MdOutlineMoreVert />
            </div>

        </nav>
    )
}

export default Navbar