type DiscountProps = {
    price: number,
    count: number
}
// export const getDiscount = ({price, count}:DiscountProps) => {
export const getDiscount = (price:number, count:number) => {
    const totalItemPrice = parseFloat((price * count).toFixed(2))
    const percent = parseFloat((totalItemPrice * 0.05).toFixed(2))
    const discount = parseFloat((totalItemPrice - percent).toFixed(2))
    return {
        percent: percent,
        discount: discount
    }
}