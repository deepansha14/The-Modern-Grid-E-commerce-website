
import {
    ADD_TO_BAG,
    CLEAR_BAG,
    COUNT_BAG_TOTALS,
    REMOVE_BAG_ITEM,
    TOGGLE_BAG_ITEM_AMOUNT,
} from '../actions'

const Bag_reducer = (state, action) => {
    if (action.type === ADD_TO_BAG) {
        const { id, color, amount, product } = action.payload
        const tempItem = state.Bag.find((i) => i.id === id + color)
        if (tempItem) {
            const tempBag = state.Bag.map((BagItem) => {
                if (BagItem.id === id + color) {
                    let newAmount = BagItem.amount + amount
                    if (newAmount > BagItem.max) {
                        newAmount = BagItem.max
                    }
                    return { ...BagItem, amount: newAmount }
                } else {
                    return BagItem
                }
            })

            return { ...state, Bag: tempBag }
        } else {
            const newItem = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.images[0].url,
                price: product.price,
                max: product.stock,
            }
            return { ...state, Bag: [...state.Bag, newItem] }
        }
    }
    if (action.type === REMOVE_BAG_ITEM) {
        const tempBag = state.Bag.filter((item) => item.id !== action.payload)
        return { ...state, Bag: tempBag }
    }
    if (action.type === CLEAR_BAG) {
        return { ...state, Bag: [] }
    }
    if (action.type === TOGGLE_BAG_ITEM_AMOUNT) {
        const { id, value } = action.payload
        const tempBag = state.Bag.map((item) => {
            if (item.id === id) {
                if (value === 'inc') {
                    let newAmount = item.amount + 1
                    if (newAmount > item.max) {
                        newAmount = item.max
                    }
                    return { ...item, amount: newAmount }
                }
                if (value === 'dec') {
                    let newAmount = item.amount - 1
                    if (newAmount < 1) {
                        newAmount = 1
                    }
                    return { ...item, amount: newAmount }
                }
            }
            return item
        })

        return { ...state, Bag: tempBag }
    }
    if (action.type === COUNT_BAG_TOTALS) {
        const { total_items, total_amount } = state.Bag.reduce(
            (total, BagItem) => {
                const { amount, price } = BagItem

                total.total_items += amount
                total.total_amount += price * amount
                return total
            },
            {
                total_items: 0,
                total_amount: 0,
            }
        )
        return { ...state, total_items, total_amount }
    }
    throw new Error(`No Matching "${action.type}" - action type`)
}

export default Bag_reducer