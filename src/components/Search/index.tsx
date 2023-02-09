import React, {useCallback, useRef, useState} from 'react';
import styles from "./Search.module.scss"
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {setSearchValue} from "../../redux/Filter/slice";
import {filterSelector} from "../../redux/Filter/selectors";

const Search = () => {
    const dispatch = useAppDispatch()
    const {categoryId, searchValue} = useAppSelector(filterSelector)

    const inputRef = useRef<HTMLInputElement>(null)

    const onClickClear = () => {
        dispatch(setSearchValue(''))
        //оператор опциональной последовательности
        inputRef.current?.focus()
    }
    // const updateSearchValue = useCallback (
    //     debounce(
    //         (str) => {dispatch(setSearchValue(str))},250
    //     ),[]
    // )
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(event.target.value));
        // updateSearchValue(event.target.value)
    }
    return (
        <div className={styles.root}>
            <img className={styles.icon} width={22} height={22} src="/img/searchIcon.svg" alt="search_icon"/>
            <input
                ref={inputRef}
                value={searchValue}
                onChange={onChangeInput}
                className={styles.input} placeholder="Search..." type="text"/>
            {searchValue &&
                <svg
                    onClick={() => onClickClear()}
                    className={styles.clearIcon}
                    height="48" viewBox="0 0 48 48" width="48" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                    <path d="M0 0h48v48h-48z" fill="none"/>
                </svg>
            }
        </div>
    );
};

export default Search;