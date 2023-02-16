import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {nanoid} from "nanoid";
import {cartSelector} from "../../redux/Cart/selectors";
import {addItem} from "../../redux/Cart/slice";
import item from "../../pages/Item";
import {TCartItem} from "../../redux/Cart/types";

type ItemCardProps = {
    //TODO не все нужны (или так оставить?)
    id: string;
    category: number;
    imageUrl: string[];
    imageMiniUrl: string[];
    title: string;
    sizes: string[];
    price: number;
    color: number;
    colortypes: string[];

}
const ItemCard: FC<ItemCardProps> = ({id, imageUrl,title,sizes,price,category}) => {

    const dispatch = useAppDispatch()

    const [activeSize, setActiveSize] = useState(sizes.length)

    const clickAddCard = () => {
        if(activeSize === sizes.length){
            alert(`Please, Select size`)
        } else {
            const Item:TCartItem = {
                uId: nanoid(),
                id,
                title,
                price,
                category,
                size: sizes[activeSize],
                image: imageUrl[0],
                itemCount: 0
            }
            dispatch(addItem(Item))
        }
    }

    return (
        <div className="item_wrapper">
            <div className="item-block">
                <div className="item-block__card">
                    <div className="item-block__image">
                        <Link to={`/item/${id}`}>
                            <img className="image__card"
                                src={imageUrl[0]}
                                 alt={title}
                            />
                            <h3 className="item-block__title">{title}</h3>
                            <h4>${price}</h4>
                        </Link>
                    </div>
                    <div className="item-block__bottom">
                        <div className="item-block__selector">
                            <ul>
                                {
                                    sizes.map((size, i) => (
                                        <li
                                            className={activeSize === sizes.length ? '' : activeSize === i ? 'active' : ''}
                                            onClick={() => setActiveSize(i)}
                                            key={i}>
                                            {size}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <button  onClick={()=>clickAddCard()} className="button">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ItemCard;