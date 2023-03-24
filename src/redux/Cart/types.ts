
export type TCartItem = {
    uId: string,
    id: string,
    category: number,
    title: string,
    size: string,
    price: number,
    image: string,
    itemCount: number,

}

export interface CartSliceState {
    itemsCart: TCartItem[],
    totalPrice: number,
    totalCount: number
    totalDiscount: number
}