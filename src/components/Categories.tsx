import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';


const Categories = () => {
    const categories = ['All' , 'Googles', 'Helmets', 'Gloves', 'Jersey', 'Pants', 'Boots']
    const [categoryId, setCategoryId] = useState(categories.length)
    const [burger, setBurger] = useState(false)

    const changeCategory = (i: number) => {
        setCategoryId(i)
        setBurger(!burger)
    }

    return (
        <div className="categories">
            <ul className={burger ? 'categoriesMenu active' : 'categoriesMenu'}>
                {
                    categories.map((category, i) => (
                        <li className={categoryId === categories.length ?'' :categoryId === i ? 'active' : ''}
                            onClick={() => changeCategory(i)}
                            key={i}>
                            {category}
                        </li>
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