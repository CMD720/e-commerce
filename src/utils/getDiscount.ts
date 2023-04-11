import {TCartItem} from "../redux/Cart/types";

export const getDiscount = (price:number, count:number) => {
    const totalItemPrice = parseFloat((price * count).toFixed(2))
    const percent = parseFloat((totalItemPrice * 0.05).toFixed(2))
    const discount = parseFloat((totalItemPrice - percent).toFixed(2))
    return {
        percent: percent,
        discount: discount
    }
}

export const ttlDiscount = (items: TCartItem[]) => {
    // const total = items.reduce((sum: number, obj: TCartItem) => {
    //     return obj.itemDiscount + sum
    // }, 0)
    // return total

    return items.reduce((sum: number, obj: TCartItem) => {
        return parseFloat((obj.itemDiscount + sum).toFixed(2))
    }, 0)
}