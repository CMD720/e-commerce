
export const getCartLocalStorage = () => {
    const data = localStorage.getItem('cart')

    return data ? JSON.parse(data) :{itemsCart:[], totalPrice:0, totalCount:0, totalDiscount:0}
}

export const getCategoryIDFromLS = () => {
    const data = localStorage.getItem('category')

    return data ? JSON.parse(data) :{categoryId:-1}
}