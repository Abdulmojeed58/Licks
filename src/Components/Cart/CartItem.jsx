import React from "react";
import { RiCloseFill } from "react-icons/ri";
// import useGlobalContext from "../../GlobalContext";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

import classes from './CartItem.module.css';



const CartItem = ({ image, name, amount, onClick }) => {

    return (
        <div className={classes.cartItem}>
            <RiCloseFill className={classes.close} onClick={onClick} />
            <img src={image} alt={name} />
            <div>
                <p className={classes.name}>{name}</p>
                <p className={classes.price}>NGN {amount}</p>
                <div className={classes.flex}>
                    <div>
                        <button><BiMinus /></button>
                        <input type="number" defaultValue={1} />
                        <button><BsPlus /></button>
                    </div>
                    <p>Delivery time: 2:00 PM</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem