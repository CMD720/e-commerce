import React, {useEffect} from 'react';
import {ItemCard, Loader} from "../components";
import {nanoid} from "nanoid";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {filterSelector} from "../redux/Filter/selectors";
import {useNavigate} from "react-router-dom";
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

    const getItems = () => {
        const search = searchValue ? `&search=${searchValue}` : ''
        const category = categoryId > 0 ? `&category=${categoryId}` : ''
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

    }, [categoryId, searchValue/*, page*/])

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as TSetFilters
            dispatch(setFilters({...params}))
        }
    }, [])
    const products = items.map((item: TItem) => <ItemCard {...item} key={nanoid()}/>)

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
                    : categoryId === 0 ? <></> : <div className="button" onClick={() => onClickShowAll()}>Show All</div>
            }
        </div>
    );
};

export default Items;