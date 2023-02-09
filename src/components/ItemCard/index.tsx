import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

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

    const [activeSize, setActiveSize] = useState(sizes.length)

    return (
        <div className="item_wrapper">
            <div className="item-block">
                <div className="item-block__card">
                    <div className="item-block__image">
                        <Link to={`/item/${id}`}>
                            <img className="image__card"
                                src={imageUrl[0]}
                                // TODO подставить id категории нужен массив категорий из endpoint :data
                                 alt="category ID"
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
                        <div className="button">add cart</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ItemCard;