import {FilterSliceState} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: FilterSliceState = {
    categoryId: -1,
    searchValue: '',
    color: -1,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        },
        setColor(state, action:PayloadAction<number>) {
            state.color = action.payload
        },
        setReset(state) {
            state.color = -1
            state.categoryId = -1
            state.searchValue = ''
        },
        resetColor(state) {
            state.color = -1
        }
    }
})

export const {setCategoryId, setSearchValue, setColor, setReset, resetColor} = filterSlice.actions
export default filterSlice.reducer