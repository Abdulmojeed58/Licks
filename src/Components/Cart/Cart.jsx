import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import useGlobalContext from "../../GlobalContext";

import classes from './Cart.module.css';
import CartItem from "./CartItem";

const Cart = () => {
    const {handleChange} = useGlobalContext()


    return (
        <section className={classes.cart}>
            <div className={classes.topIcon}>
                <AiOutlineMenu onClick={handleChange} style={{cursor: 'pointer'}} className={classes.icon} />
                <h2>Cart</h2>
                <MdNotificationsNone className={classes.icon} />
            </div>


            <div>
                <CartItem />
            </div>
        </section>
    )
}

export default Cart