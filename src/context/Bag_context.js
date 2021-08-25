import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducers/Bag_reducer'
import {
    ADD_TO_BAG,
    REMOVE_BAG_ITEM,
    TOGGLE_BAG_ITEM_AMOUNT,
    CLEAR_BAG,
    COUNT_BAG_TOTALS,
} from '../actions'

const getLocalStorage = () => {
    let Bag = localStorage.getItem('Bag')
    if (Bag) {
        return JSON.parse(localStorage.getItem('Bag'))
    } else {
        return []
    }
}

const initialState = {
    Bag: getLocalStorage(),
    total_items: 0,
    total_amount: 0,
    shipping_fee: 534,
}

const BagContext = React.createContext()

export const BagProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // add to Bag
    const addToBag = (id, color, amount, product) => {
        dispatch({ type: ADD_TO_BAG, payload: { id, color, amount, product } })
    }
    // remove item
    const removeItem = (id) => {
        dispatch({ type: REMOVE_BAG_ITEM, payload: id })
    }
    // change amount
    const changeAmount = (id, value) => {
        console.log(id, value)
        dispatch({ type: TOGGLE_BAG_ITEM_AMOUNT, payload: { id, value } })
    }
    // clear Bag
    const clearBag = () => {
        dispatch({ type: CLEAR_BAG })
    }

    useEffect(() => {
        dispatch({ type: COUNT_BAG_TOTALS })
        localStorage.setItem('Bag', JSON.stringify(state.Bag))
    }, [state.Bag])

    return (
        <BagContext.Provider
            value={{ ...state, addToBag, removeItem, changeAmount, clearBag }}
        >
            {children}
        </BagContext.Provider>
    )
}
// make sure use
export const useBagContext = () => {
    return useContext(BagContext)
}