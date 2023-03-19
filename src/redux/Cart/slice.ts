import {CartSliceState, TCartItem} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import {getLocalStorage} from "../../utils/getLocalStorage";

const initCart = getLocalStorage()

const initialState: CartSliceState = {
    itemsCart: initCart.itemsCart,
    totalPrice: initCart.totalPrice,
    totalCount: initCart.totalCount
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem(state, action:PayloadAction<TCartItem>) {
            const findItem = state.itemsCart.find(item => {
                return ((item.id === action.payload.id) &&
                    (item.size === action.payload.size))
            })
            findItem ? findItem.itemCount++ : state.itemsCart.push({...action.payload, itemCount: 1})
            // const total = parseFloat((price * itemCount).toFixed(2));
            state.totalPrice = parseFloat((state.totalPrice + action.payload.price).toFixed(2))
            state.totalCount++
        },
        removeItem(state, action:PayloadAction<TCartItem>) {
            const findItem = state.itemsCart.find(item => {
                return ((item.id === action.payload.id) &&
                    (item.size === action.payload.size))
            })
            if(findItem) {
                if(action.payload.itemCount !== 1){
                    findItem.itemCount--
                }else {
                    state.itemsCart = state.itemsCart.filter(item => item.uId !== action.payload.uId)
                }
            }
            state.totalPrice = parseFloat((state.totalPrice - action.payload.price).toFixed(2))
            state.totalCount--
        },
        removeItemFull(state, action:PayloadAction<TCartItem>){
            state.itemsCart = state.itemsCart.filter(item => item.uId !== action.payload.uId)
            state.totalPrice =parseFloat((state.totalPrice - (action.payload.itemCount * action.payload.price)).toFixed(2))
            state.totalCount -= action.payload.itemCount
        },
        clearItems(state) {
            state.itemsCart = []
            state.totalCount = 0
            state.totalPrice = 0
        },
    }
})

export const {addItem, removeItem, removeItemFull, clearItems} = cartSlice.actions
export  default cartSlice.reducer