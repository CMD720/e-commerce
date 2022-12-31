import React, {useRef, useState} from 'react';
import styles from "./Search.module.scss"

const Search = () => {
    // const dispatch = useAppDispatch()
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickClear = () => {
        // dispatch(setSearchValue(''))
        setValue('')
        //оператор опциональной последовательности
        inputRef.current?.focus()
    }
    // const updateSearchValue = useCallback (
    //     debounce(
    //         (str) => {dispatch(setSearchValue(str))},250
    //     ),[]
    // )
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        // updateSearchValue(event.target.value)
    }
    return (
        <div className={styles.root}>
            <img className={styles.icon} width={22} height={22} src="/img/searchIcon.svg" alt="search_icon"/>
            <input
                ref={inputRef}
                value={value}
                onChange={onChangeInput}
                className={styles.input} placeholder="Search..." type="text"/>
            {value &&
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