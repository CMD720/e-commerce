import {ItemsSliceProps, Status, TItem} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchItems} from "./fetchItem";

const initialState: ItemsSliceProps = {
    items: [],
    status: Status.LOADING, // loading | success | error
}

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<TItem[]>) {
            state.items = action.payload
            state.status = Status.SUCCESS
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchItems.fulfilled, (state, action) => {
            state.items = action.payload
            state.status = Status.SUCCESS
        })
        builder.addCase(fetchItems.pending, (state) => {
            state.status = Status.LOADING
            state.items = []
        })
        builder.addCase(fetchItems.rejected, (state) => {
            state.status = Status.ERROR
            state.items = []
        })
    }

})
export const {setItems} = itemSlice.actions

export default itemSlice.reducer