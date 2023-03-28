import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { MdNotificationsNone } from "react-icons/md";
import { Link } from "react-router-dom";

import classes from './Explore.module.css';
import useGlobalContext from "../../GlobalContext";
import Food from "../FoodItems/Food";
import Animation from "../Animation/Animation";
import { allData } from "../axios";



const Explore = () => {
    const {handleChange} = useGlobalContext()
    const [foods, setFoods] = useState([])
    const [loading, setLoading] = useState(true)
    const [search, setSearch] = useState('')
    const [debouncer, setDebouncer] = useState('')

    useEffect(()=>{
        allData().then(res=> {
            setFoods(res.data)
            setLoading(false)
        })
        .catch(error=>console.log(`There is an error ${error}`))
    }, [])

    const handleFilter = (e) => {
        
        setSearch(e.target.value)
    }

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncer(search)
        }, 300)
        
        return ()=> clearTimeout(timerId)
    }, [search])

    const regEx = new RegExp(debouncer, 'i')
    
    

    const allFood = foods.categories?.filter((category)=>category.strCategory.match(regEx)).map((category)=>{
        const {idCategory, strCategory: name, strCategoryThumb: image} = category
        return (
            <Link to={`/explore/${idCategory}`} className={classes.food}>
                <Food 
                    key={idCategory}
                    image={image}
                    name={name}
                    className={classes.imgCon}
                />
            </Link>

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
                        value={search}
                        onChange={(e)=>handleFilter(e)}
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