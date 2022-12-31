import {combineReducers, configureStore} from "@reduxjs/toolkit";
import modalSlice from './Modal/slice'

const rootReducer = combineReducers({
    modal: modalSlice,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
