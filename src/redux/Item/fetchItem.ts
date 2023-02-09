import {createAsyncThunk} from "@reduxjs/toolkit";
import {TItem} from "./types";
import axios from "axios";

export const fetchItem = createAsyncThunk<TItem[], Record<string, string>>(
    'items/fetchItemsStatus',
    async (params) => {
        const {category, page, sortBy, order, search} = params
        const {data} = await axios.get<TItem[]>(
            `https://63d036bce52f587829ae3131.mockapi.io/items`)
        return data
    }
)