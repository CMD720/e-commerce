import {FilterSliceState, TSetFilters} from "./types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getCategoryIDFromLS} from "../../utils/getLocalStorage";

const initCategory = getCategoryIDFromLS()

const initialState: FilterSliceState = {
    categoryId: initCategory.categoryId,
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
        setColor(state, action: PayloadAction<number>) {
            state.color = action.payload
        },
        setReset(state) {
            state.color = -1
            state.categoryId = -1
            state.searchValue = ''
        },
        resetColor(state) {
            state.color = -1
        },
        setFilters(state, action: PayloadAction<TSetFilters>) {
            if (Object.keys(action.payload).length) {
                state.categoryId = Number(action.payload.categoryId)
            } else {
                state.categoryId = 0
            }
        }
    }
})

export const {setCategoryId, setSearchValue, setColor, setReset, resetColor, setFilters} = filterSlice.actions
export default filterSlice.reducer