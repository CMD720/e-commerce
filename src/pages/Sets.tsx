import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {filterSelector} from "../redux/Filter/selectors";
import {itemDataSelector} from "../redux/Item/selector";
import {useNavigate} from "react-router-dom";
import {fetchItems} from "../redux/Item/fetchItem";
import Loader from "../components/Loader";
import {setReset} from "../redux/Filter/slice";
import {TItem} from "../redux/Item/types";
import ItemCard from "../components/ItemCard";
import Set from "../components/Set/Set"
import {nanoid} from "nanoid";
import axios from "axios";


const Sets = () => {

    const {categoryId, searchValue} = useAppSelector(filterSelector)
    // const {items, status} = useAppSelector(itemDataSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    //TODO разобраться с типами у items

    // const[items, setItems] = useState<TItem[]>([])
    const[items, setItems] = useState<any[]>([])

    const[setss, setSets] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const colortypes = ["red" , "black" , "white"]

    const getSet = () => {
        colortypes.map(async(color, index) => {
            const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items?&color=${index}`)
            setItems(prevState => ([ ...prevState, data ]))
            setSets(prevState => ([ ...prevState, data.map((item:any) => <ItemCard {...item} key={nanoid()}/>) ]))
            // console.log(index);
            // console.log('data',data);
        })
        setIsLoading(false)
    }

    useEffect(() => {
        setIsLoading(true)
        getSet()
    }, [])

    const products = items.map((item) => <Set items={item} key={nanoid()}/>)

    console.log('ITEMS',items);
    console.log('SET',setss);
    return (
        <div>
            <div className="container">
            {/*    <div className="home-item">*/}
                    {
                        isLoading
                            ? <Loader/>
                            : products
                            // : setss
                    }
                {/*</div>*/}
            <br/>
                {
                    isLoading
                        ? <></>
                        : <div className="button" onClick={() => navigate(-1)}>Back</div>
                }
            </div>
        </div>
    );
};

export default Sets;