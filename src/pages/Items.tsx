import React, {useEffect, useState} from 'react';
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";
import {nanoid} from "nanoid";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {filterSelector} from "../redux/Filter/selectors";
import {Link, useNavigate} from "react-router-dom";
import {setReset} from "../redux/Filter/slice";

const Items = () => {

    const {categoryId, searchValue} = useAppSelector(filterSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [items, setItem] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    const getData = async (categoryId:number, searchValue:string) => {
        try{
            const search = searchValue ? `&search=${searchValue}` : ''
            const category = categoryId > 0 ? `category=${categoryId}` : ''
            // const response = await fetch(`https://63d036bce52f587829ae3131.mockapi.io/items?&color=1&category=2`)
            const response = await fetch(`https://63d036bce52f587829ae3131.mockapi.io/items?${category}${search}`)
            const data = await response.json()
            setIsLoading(false)
            console.log('category',category);
            console.log('search',search);
            return setItem(data)
            // return data
        }catch (err) {
            console.log('ERROR',err);
        }
    }
    useEffect(() => {
        setIsLoading(true)
        getData(categoryId, searchValue)
    },[categoryId, searchValue])
    //
    // console.log(items);


    //TODO написать тип для item вместо any
    const products = items.map((item: any) => <ItemCard {...item} key={nanoid()}/>)

    //TODO сделать свои классы scss для items (вместо home-item)
    return (
        <div className="container">
        {/*<div>*/}
            <div className="home-item">
            {/*<div>*/}
                {
                    isLoading
                        ? <Loader/>
                        : products
                }
            </div>
            <br/>
            {
             isLoading
                 ? <></>
                 : <div className="button" onClick={()=>dispatch(setReset())}>Back (or Show All)</div>
            }
        </div>
    );
};

export default Items;