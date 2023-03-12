import React from "react";
import cartPhoto from '../../Images/Rectangle 21.png';
import { RiCloseFill } from "react-icons/ri";

import classes from './CartItem.module.css';



const CartItem = () => {
    return (
        <div className={classes.cartItem}>
            <RiCloseFill className={classes.close} />
            <img src={cartPhoto} alt='cartImage' />
            <div>
                <p className={classes.name}>jollof rice</p>
                <p className={classes.price}>NGN 5,700</p>
                <div className={classes.flex}>
                    <div>
                        <button>-</button>
                        <input type="number" />
                        <button>+</button>
                    </div>
                    <p>Delivery time: 2:00 PM</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem