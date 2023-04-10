import React, { createContext, useContext, useEffect, useReducer, useState } from "react";

const AppContext = createContext()

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch(action.type) {
        case 'ADD': {
            
            let updatedTotalAmount = state.totalAmount + action.item.price * action.item.qty

            const existingCartItemIndex = state.items.findIndex(item=>action.item.idCategory === item.idCategory)

            const existingCartItem = state.items[existingCartItemIndex]

            let updatedCartItems;

            if(existingCartItem) {
                const updatedCartItem = {
                    ...existingCartItem,
                    qty: existingCartItem.qty + 1
                }

                updatedTotalAmount = state.totalAmount + action.item.price

                updatedCartItems = [...state.items]
                updatedCartItems[existingCartItemIndex] = updatedCartItem

            } else {
                updatedCartItems =  state.items.concat(action.item)
            }

            console.log(state.items)
            
            return {
                items: updatedCartItems,
                totalAmount: updatedTotalAmount
            }
        }

        case 'REMOVE': {

            const existingCartItemIndex = state.items.findIndex(item=>action.id === item.idCategory)

            const existingCartItem = state.items[existingCartItemIndex]

            const updatedTotalAmount = state.totalAmount - existingCartItem.price * existingCartItem.qty

            let updatedCartItems

            updatedCartItems = state.items.filter(item=>item.idCategory !== action.id)


            return {
                items: updatedCartItems,
                totalAmount: updatedTotalAmount
            }


        }

        case 'REMOVE_BY_ONE': {

            const existingCartItemIndex = state.items.findIndex(item=>action.id === item.idCategory)

            const existingCartItem = state.items[existingCartItemIndex]

            const updatedTotalAmount = state.totalAmount - existingCartItem.price

            let updatedCartItems

            if(existingCartItem.qty === 1) {
                updatedCartItems = state.items.filter(item=>item.idCategory !== action.id)
            } else {
                const updatedCartItem = {
                    ...existingCartItem,
                    qty: existingCartItem.qty - 1
                }

                updatedCartItems = [...state.items]
                updatedCartItems[existingCartItemIndex] = updatedCartItem
            }

            return {
                items: updatedCartItems,
                totalAmount: updatedTotalAmount
            }


        }

        default:
            return defaultCartState
        }
}


export const AppProvider = ({children}) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
    const [isNavBarActive, setIsNavBarActive] = useState(false)
    const [currentId, setCurrentId] = useState(1)
    const [showMessage, setShowMessage] = useState(false)
    const [message, setMessage] = useState('')

    const addToCart = (item) => {
        dispatchCartAction({type: 'ADD', item: item})
        setShowMessage(true)
        setMessage('Added to cart successfully')
    }

    const removeFromCart = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id})
        setShowMessage(true)
        setMessage('Product removed successfully')
    }

    const removeByOne = (id) => {
        dispatchCartAction({type: 'REMOVE_BY_ONE', id: id})
        setShowMessage(true)
        setMessage('An item has been removed from the cart')
    }

    const handleChange = () => {
        setIsNavBarActive(prevValue=>!prevValue)
    }

    const handleIdChange = (id) => {
        setCurrentId(id)
    }

    useEffect(()=>{
        const messageId = setTimeout(()=>{
            setShowMessage(false)
        }, 3000)

        return ()=> clearTimeout(messageId)
    }, [addToCart, removeFromCart, removeByOne])

return (
    <AppContext.Provider value={{
        isNavBarActive,
        setIsNavBarActive,
        handleChange,
        handleIdChange,
        currentId,
        setCurrentId,
        addToCart,
        removeFromCart,
        removeByOne,
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        showMessage,
        message
    }}>
        {children}
    </AppContext.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export default useGlobalContext