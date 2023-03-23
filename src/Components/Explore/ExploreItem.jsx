import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { allData } from "../axios";
import classes from "./ExploreItem.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import useGlobalContext from "../../GlobalContext";
import Animation from "../Animation/Animation";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

const ExploreItem = () => {
    const {handleChange, addToCart} = useGlobalContext()
    const {id} = useParams()
    const ref = useRef()

    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        allData().then(res=> {
            setFoods(res.data)
            setLoading(false)
        })
        .catch(error=>console.log(`There is an error ${error}`))
    }, [])

    const individualFood = foods.categories?.find((category)=>{
        return category.idCategory === id
    })

    const addToCartHandler = () => {
        addToCart({
            ...individualFood,
            price: 700,
            qty: +ref.current.value
        })
    }


    // console.log(individualFood?.idCategory)
    return (
        <section className={classes.exploreItem}>
            <div className={classes.topIcon}>
                <AiOutlineMenu onClick={handleChange} style={{cursor: 'pointer'}} />
                <MdNotificationsNone />
            </div>
            {/* <h1>Explore our menu</h1> */}
            <div className={classes.foodContent}>
                <div className={classes.a}>
                    {
                        !loading ? <img src={individualFood?.strCategoryThumb} alt={individualFood?.strCategory} /> : <Animation className={classes.animi} />
                    }
                    
                    <h1>{individualFood?.strCategory}</h1>
                    <ul>
                        <li><button>Regular</button></li>
                        <li><button>Special</button></li>
                    </ul>
                </div>

                <div className={classes.regular}>
                    <div className={classes.flex}>
                        <p>Dish package</p>
                        <p>NGN</p>
                    </div>

                    <div className={classes.flex}>
                        <p>Total</p>
                        <p>2,100</p>
                    </div>

                    <div className={classes.line} />

                    <div className={classes.qty}>
                        <div>
                            <button><BiMinus /></button>
                            <input type="number" ref={ref} defaultValue={1} min={1} max={5} />
                            <button><BsPlus /></button>
                        </div>
                        <p>4,200</p>
                    </div>

                    <div className={classes.schedule}>
                        <input type="checkbox" name="" id="" />
                        <p>Schedule delivery</p>
                    </div>

                    <button 
                        className={classes.addToCartBtn}
                        onClick={addToCartHandler}
                    >Add 2 regular to cart - NGN 4,200</button>
                </div>

                <div className={classes.special}>
                    {/* <h1>Special</h1> */}
                </div>


            </div>
        </section>
    )
}

export default ExploreItem