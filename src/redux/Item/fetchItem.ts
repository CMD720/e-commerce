import {createAsyncThunk} from "@reduxjs/toolkit";
import {TItem} from "./types";
import axios from "axios";
import {setItems} from "./slice";

export const fetchItems = createAsyncThunk<TItem[], Record<string, string>>(
    'items/fetchItemsStatus',
    async (params,thunkAPI) => {
        const {category, sortBy, search, color, id, pageNumber} = params
        // console.log('category',category);
        // console.log('search',search);
        // console.log('PAGE',pageNumber);
        const {data} = await axios.get<TItem[]>(
            // `https://63d036bce52f587829ae3131.mockapi.io/items?${category}${sortBy}${search}${color}`)
            `https://63d036bce52f587829ae3131.mockapi.io/items?${category}${search}`)
            // `https://63d036bce52f587829ae3131.mockapi.io/items?${pageNumber}&limit=6${category}${search}`)
            // 'https://63d036bce52f587829ae3131.mockapi.io/items?',{params:{_page: pageNumber, _limit:6}})

        // console.log(thunkAPI);
        // thunkAPI.dispatch(setItems(data))
        // console.log(thunkAPI.getState());
        return data
    }
)