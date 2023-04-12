import React, {FC, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../redux/storeHooks";
import {nanoid} from "nanoid";
import {addItem} from "../../redux/Cart/slice";
import {TCartItem} from "../../redux/Cart/types";
import {resetColor, setCategoryId} from "../../redux/Filter/slice";

type ItemCardProps = {
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
const ItemCard: FC<ItemCardProps> = ({id, imageUrl, title, sizes, price, category}) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const [activeSize, setActiveSize] = useState(sizes.length)

    const clickAddCard = () => {
        if (activeSize === sizes.length) {
            alert(`Please, Select size`)
        } else {
            const Item: TCartItem = {
                uId: nanoid(),
                id,
                title,
                price,
                category,
                size: sizes[activeSize].toString().toUpperCase(),
                image: imageUrl[0],
                itemCount: 0,
                itemDiscount: 0
            }
            dispatch(addItem(Item))
        }
    }

    const onClickCard = () => {
        navigate(`/item/${id}`)
        dispatch(setCategoryId(category))
        dispatch(resetColor())
    }

    return (
        <div className="item_wrapper">
            <div className="item-block">
                <div className="item-block__card">
                    <div onClick={() => onClickCard()} className="item-block__image">
                        <img className="image__card"
                             src={imageUrl[0]}
                             alt={title}
                        />
                        <h3 className="item-block__title">{title}</h3>
                        <h4>${price}</h4>
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
                        <button onClick={() => clickAddCard()} className="button">Add Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ItemCard;