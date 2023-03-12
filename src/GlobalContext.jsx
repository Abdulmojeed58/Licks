import React, { createContext, useContext, useState } from "react";

const AppContext = createContext()

export const AppProvider = ({children}) => {
    const [isNavBarActive, setIsNavBarActive] = useState(false)
    const [currentId, setCurrentId] = useState(1)

    const handleChange = () => {
        setIsNavBarActive(prevValue=>!prevValue)
    }

    const handleIdChange = (id) => {
        setCurrentId(id)
        console.log(id)
    }

return (
    <AppContext.Provider value={{
        isNavBarActive,
        setIsNavBarActive,
        handleChange,
        handleIdChange,
        currentId,
        setCurrentId
    }}>
        {children}
    </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export default useGlobalContext