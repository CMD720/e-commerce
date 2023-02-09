import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalSlice from './Modal/slice'
import itemSlice from "./Item/slice";
import filterSlice from "./Filter/slice";

const rootReducer = combineReducers({
    modal: modalSlice,
    item: itemSlice,
    filter: filterSlice
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
