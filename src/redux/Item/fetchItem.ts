import {createAsyncThunk} from "@reduxjs/toolkit";
import {TItem} from "./types";
import axios from "axios";

export const fetchItems = createAsyncThunk<TItem[], Record<string, string>>(
    'items/fetchItemsStatus',
    async (params) => {
        const {category, sortBy, search, color, id} = params
        console.log('category',category);
        console.log('search',search);
        const {data} = await axios.get<TItem[]>(
            // `https://63d036bce52f587829ae3131.mockapi.io/items?${category}${sortBy}${search}${color}`)
            `https://63d036bce52f587829ae3131.mockapi.io/items?${category}${search}`)
        return data
    }
)