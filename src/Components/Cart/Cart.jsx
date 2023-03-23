import React, { useRef } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import useGlobalContext from "../../GlobalContext";

import classes from './Cart.module.css';
import CartItem from "./CartItem";

const Cart = () => {
    const {handleChange, items, totalAmount, removeFromCart} = useGlobalContext()
    const inputRef = useRef()

    const handleRemoveFromCart = (id) => {
        removeFromCart(id)
    }


    const cartItems = items.map((item)=>{
        // inputRef.current.value = item.qty

        return (
            <CartItem 
                key={item.idCategory} 
                image={item.strCategoryThumb} 
                name={item.strCategory} 
                amount={(item.price * item.qty).toLocaleString()} 
                onClick={()=>handleRemoveFromCart(item.idCategory)}
                // ref={inputRef}
            />
        )
    })


    return (
        <section className={classes.cart}>
            <div className={classes.topIcon}>
                <AiOutlineMenu onClick={handleChange} style={{cursor: 'pointer'}} className={classes.icon} />
                <h2>Cart</h2>
                <MdNotificationsNone className={classes.icon} />
            </div>


            <div>
                {
                    items.length > 0 ? cartItems : <h3>No Cart Item</h3>
                }
            </div>

            <div className={classes.totalAmount}>
                <h2>Total</h2>
                <h2>NGN {totalAmount ? totalAmount.toFixed(2) : (0).toFixed(2)}</h2>
            </div>
        </section>
    )
}

export default Cart