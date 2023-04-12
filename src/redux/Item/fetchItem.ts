import {createAsyncThunk} from "@reduxjs/toolkit";
import {TItem} from "./types";
import axios from "axios";

export const fetchItems = createAsyncThunk<TItem[], Record<string, string>>(
    'items/fetchItemsStatus',
    async (params,thunkAPI) => {
        const {category,  search} = params
        const {data} = await axios.get<TItem[]>(
            `https://63d036bce52f587829ae3131.mockapi.io/items?${category}${search}`)
        // console.log(thunkAPI);
        return data
    }
)