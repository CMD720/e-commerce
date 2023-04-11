import React, {useEffect, useRef, useState} from 'react';
import {ItemCard, Loader} from "../components";
// import Loader from "../components/Loader";
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
import useWhyDidYouUpdate from "ahooks/lib/useWhyDidYouUpdate";

const Items = () => {

    const {categoryId, searchValue} = useAppSelector(filterSelector)
    const {items, status} = useAppSelector(itemDataSelector)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()


    const lastElement = useRef<any>(null)
    const [page, setPage] = useState(1)
    const observer = useRef<IntersectionObserver | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [itemsM, setItemsM] = useState<TItem[]>(items)

    const totalPage = 3

    const getItems = () => {
        const search = searchValue ? `&search=${searchValue}` : ''
        const category = categoryId > 0 ? `&category=${categoryId}` : ''
        // const pageNumber = searchValue ? '' :`&page=${page}`
        // console.log('category',category);
        // console.log('search',search);
        const queryString = qs.stringify({
            // page,
            categoryId
        })
        navigate(`?${queryString}`)
         dispatch(fetchItems({search, category /*,pageNumber*/}))
    }

    const onClickShowAll = () => {
        dispatch(resetColor())
        dispatch(setCategoryId(0))
    }
    //не работает поиск с работающим observer
    //поиск заработал, не возвращает полного списка items при обнулении строки поиска

    // useEffect(() => {
    //     if(categoryId === 0){
    //         if(searchValue){
    //             setItemsM([...items])
    //         }else{
    //             setItemsM([...itemsM, ...items])
    //         }
    //         if(status === 'loading') return
    //         if(observer.current) {
    //             // console.log('observe disconnect')
    //             observer.current?.disconnect()
    //         };
    //         var callback = function (entries: any, observer: any) {
    //             if (entries[0].isIntersecting && page < totalPage) {
    //                 // console.log("DIV is visible zone")
    //                 // console.log('pageNumber', page);
    //                 setPage(page + 1)
    //                 // console.log('pageNumber', page);
    //             }
    //         };
    //         observer.current = new IntersectionObserver(callback);
    //         observer.current.observe(lastElement.current)
    //     }
    //
    // }, [status])

    useEffect(() => {
        //////////////////////
        // if(categoryId === 0) {
        //     getItems()
        // }else{
        //     setPage(1)
        //     setItemsM(items)
        ////////////////////
            getItems()
        // }

    }, [categoryId, searchValue/*, page*/])

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1)) as unknown as TSetFilters
            // console.log('params', params);
            dispatch(setFilters({...params}))
        }
    }, [])
    console.log('re remder Items');
    useWhyDidYouUpdate('ITEMS', {categoryId, searchValue, items, status})
    const products = items.map((item: TItem) => <ItemCard {...item} key={nanoid()}/>)

    ////////////
    // const products = itemsM.map((item: TItem) => <ItemCard {...item} key={nanoid()}/>)
    ////////////
    //TODO сделать свои классы scss для items (вместо home-item)  +  media для grid
    //TODO подгрузка карточек при прокрутке intersectionObserver!!! notWork
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

        // <div className="container">
        //     <div className="home-item">
        //         {products}
        //
        //         {
        //             status === 'loading' &&
        //             <Loader/>
        //         }
        //
        //     </div>
        //     <div ref={lastElement} style={{height: 20, background: 'red'}}/>
        //
        //     {
        //         status === 'loading'
        //             ? <></>
        //             : categoryId === 0 ? <></> : <div className="button" onClick={() => onClickShowAll()}>Show All</div>
        //     }
        // </div>

    );
};

export default Items;