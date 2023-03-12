import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";

import classes from './Explore.module.css';
import useGlobalContext from "../../GlobalContext";
import Food from "../FoodItems/Food";
import Animation from "../Animation/Animation";
import { allData } from "../axios";



const Explore = () => {
    const {handleChange} = useGlobalContext()
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        allData().then(res=> {
            setFoods(res.data)
            setLoading(false)
        })
        .catch(error=>console.log(`There is an error ${error}`))
    }, [])
    
    console.log(foods)

    const allFood = foods.categories?.map((category)=>{
        const {idCategory, strCategory: name, strCategoryThumb: image} = category
        return (
            <div className={classes.food}>
                <Food 
                    key={idCategory}
                    image={image}
                    name={name}
                    className={classes.imgCon}
                />
            </div>

        )
    })

    return (
        <section className={classes.explore}>
            <div className={classes.topIcon}>
                <AiOutlineMenu onClick={handleChange} style={{cursor: 'pointer'}} />
                <MdNotificationsNone />
            </div>
            <h1>Explore our menu</h1>
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

            <div className={classes.foodData}>
                {!loading ? allFood : <>
                    <Animation className={classes.animi} />
                    <Animation className={classes.animi} />
                    <Animation className={classes.animi} />
                    <Animation className={classes.animi} />
                    <Animation className={classes.animi} />
                    <Animation className={classes.animi} />
                </>}
            </div>
        </section>
    )
}

export default Explore