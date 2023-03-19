import React, {useEffect, useState} from 'react';
import ItemCard from "../components/ItemCard";
import Loader from "../components/Loader";
import {nanoid} from "nanoid";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {filterSelector} from "../redux/Filter/selectors";
import {Link, useNavigate} from "react-router-dom";
import {resetColor, setCategoryId, setFilters} from "../redux/Filter/slice";
import {fetchItems} from "../redux/Item/fetchItem";
import {itemDataSelector} from "../redux/Item/selector";
import {TItem} from "../redux/Item/types";
import qs from "qs";
import {TSetFilters} from "../redux/Filter/types";

const Items = () => {

    const {categoryId, searchValue} = useAppSelector(filterSelector)
    const {items, status} = useAppSelector(itemDataSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    // const [isLoading, setIsLoading] = useState(true)

    const getItems = () => {
        const search = searchValue ? `&search=${searchValue}` : ''
        const category = categoryId > 0 ? `&category=${categoryId}` : ''
        // console.log('category',category);
        // console.log('search',search);
        const queryString = qs.stringify({
            categoryId
        })
        navigate(`?${queryString}`)
        dispatch(fetchItems({search, category}))

    }

    const onClickShowAll = () => {
        dispatch(resetColor())
        dispatch(setCategoryId(0))
    }

    useEffect(() => {
        getItems()
    }, [categoryId, searchValue])

    //////////////////// TODO записать состояние фильтра categoryID в LocalStorage
    useEffect(() => {
        if(window.location.search){
            const params = qs.parse(window.location.search.substring(1)) as unknown as TSetFilters
            console.log('params',params);
            dispatch(setFilters({...params}))
        }
    },[])
    /////////////////////
    const products = items.map((item: TItem) => <ItemCard {...item} key={nanoid()}/>)

    //TODO сделать свои классы scss для items (вместо home-item)  +  media для grid
    return (
        <div className="container">
            <div className="home-item">
                {
                    status === 'loading'
                        ? <Loader/>
                        : products
                }
            </div>
            {
                status === 'loading'
                    ? <></>
                    : categoryId===0 ?<></> :<div className="button" onClick={() => onClickShowAll()}>Show All</div>
            }
        </div>
    );
};

export default Items;