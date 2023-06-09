import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import {allData} from "../axios";
import Animation from "../Animation/Animation";

import classes from './FoodItems.module.css';
import useGlobalContext from "../../GlobalContext";
import Food from "./Food";
import discount1 from '../../Images/Discount1.png';
import discount2 from '../../Images/Discount2.png';
import Discount from "./Discount";

const FoodItems = () => {
    const {handleChange} = useGlobalContext()

    const [foodData, setFoodData] = useState([])
    const [loading, setLoading] = useState(true)
    const [viewAll, setViewAll] = useState(false)
    

    useEffect(()=>{
        allData().then(res=> {
            setFoodData(res.data)
            setLoading(false)
        })
        .catch(error=>console.log(`There is an error ${error}`))
        
        // console.log(foodData)
    }, [])
    

    const toggleViewAll = () => {
        setViewAll(prevValue=> !prevValue)
    }

    const sliceFood = viewAll ? foodData.categories : foodData.categories?.slice(0,5);


    const allFoodData = sliceFood?.map((category)=>{
        const {idCategory, strCategory: name, strCategoryThumb: image} = category
        return (
            <div className={classes.food}>
                <Food 
                    key={idCategory}
                    image={image}
                    name={name}
                />
            </div>

        )
    })


    return (
        <section className={classes.foodItems}>
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

            <div>
                <div className={classes.foodCategories}>
                    <h2>Food Categories</h2>
                    <button onClick={toggleViewAll} className={classes.viewAll}>{viewAll ? 'View less' : 'View all'}</button>
                </div>
                <div className={viewAll ? classes.foodData : `${classes.foodData} ${classes.overflow}`}>
                    {
                        !loading ? allFoodData : 
                        <>
                            <Animation className={classes.animi} />
                            <Animation className={classes.animi} />
                            <Animation className={classes.animi} />
                            <Animation className={classes.animi} />
                            <Animation className={classes.animi} />
                        </>
                    }
                    {/* {allFoodData} */}
                </div>
            </div>

            <div>
                <div className={classes.foodCategories}>
                    <h2>Discounts</h2>
                    <button className={classes.viewAll}>View all</button>
                </div>

                <div className={classes.discount}>
                    <Discount image={discount1} name='Pounded Yam' />
                    <Discount image={discount2} name='Jollof Rice' />
                </div>
            </div>
        </section>
    )
}

export default FoodItems