import React from "react";
import { RiCloseFill } from "react-icons/ri";
import useGlobalContext from "../../GlobalContext";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

import classes from './CartItem.module.css';


const CartItem = ({ image, name, amount, onClick, qty, item }) => {
    const {addToCart, removeByOne} = useGlobalContext()

    return (
        <div className={classes.cartItem}>
            <RiCloseFill className={classes.close} onClick={onClick} />
            <img src={image} alt={name} />
            <div>
                <p className={classes.name}>{name}</p>
                <p className={classes.price}>NGN {amount}</p>
                <div className={classes.flex}>
                    <div>
                        <button onClick={()=>removeByOne(item.idCategory)}><BiMinus /></button>
                        <p className={classes.input}>{qty}</p>
                        {/* <input type="number" defaultValue={1} /> */}
                        <button onClick={()=>addToCart(item)}><BsPlus /></button>
                    </div>
                    <p className={classes.time}>Delivery time: 2:00 PM</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem