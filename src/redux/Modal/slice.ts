import {TModal, TStyle} from "./types";
import {createSlice} from "@reduxjs/toolkit";

const initialState: TModal = {
    modalCart: false,
    modal: false,
}

const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        modalOnOff(state, action) {
            // action.payload === 'cart' ? state.modalCart = !state.modalCart
            //     : action.payload === 'modal' ? state.modal = !state.modal : state.modalCart = false

            if(action.payload === 'cart'){
                state.modalCart = !state.modalCart
                state.modal = false
                // state.modal = !state.modal
            }
            if(action.payload === 'modal'){
                state.modal = !state.modal
                state.modalCart = false
                // state.modalCart = !state.modalCart
            }

        },
    },
})
export default modalSlice.reducer
export const {modalOnOff} = modalSlice.actions