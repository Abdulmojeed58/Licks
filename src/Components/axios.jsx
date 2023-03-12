import React, { useEffect, useState } from "react";
import axios from "axios";


    export const allData = async() => {
        return await axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
        
    }

