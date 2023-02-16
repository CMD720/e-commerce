import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {Link} from "react-router-dom";
import {nanoid} from "nanoid";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {filterSelector} from "../redux/Filter/selectors";
import {resetColor, setCategoryId} from "../redux/Filter/slice";


const Categories = () => {

    const dispatch = useAppDispatch()
    const {categoryId, searchValue} = useAppSelector(filterSelector)

    const categories = ['All' , 'Googles', 'Helmets', 'Gloves', 'Jersey', 'Pants', 'Boots']
    const [burger, setBurger] = useState(false)

    const changeCategory = (i: number) => {
        dispatch(setCategoryId(i))
        dispatch(resetColor())
        setBurger(!burger)
    }

    return (
        <div className="categories">
            <ul className={burger ? 'categoriesMenu active' : 'categoriesMenu'}>
                {
                    categories.map((category, i) => (
                        <Link to={"/items"} key={nanoid()}>
                            <li className={categoryId === categories.length ?'' :categoryId === i ? 'active' : ''}
                                onClick={() => changeCategory(i)}>
                                {category}
                            </li>
                        </Link>
                    ))
                }
            </ul>
            <div onClick={()=>setBurger(!burger)} className='burger_btn'>
                {burger ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
        </div>
    );
};

export default Categories;