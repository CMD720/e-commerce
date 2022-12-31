import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

const ItemCard: FC = () => {
    const sizes = ['s', 'm', 'l', 'xl']
    const [activeSize, setActiveSize] = useState(sizes.length)

    return (
        <div className="item_wrapper">
            <div className="item-block">
                <div className="item-block__card">
                    <div className="item-block__image">
                        <Link to={`/item/`}>
                            <img className="image__card"
                                src="https://s7d2.scene7.com/is/image/FoxRacing/29659001_1?$dw_pm1$&wid=400&hei=400&fmt=webp-alpha"
                                // TODO подставить id категории
                                 alt="category ID"
                            />
                            <h3 className="item-block__title">V1 TOXSYK HELMET</h3>
                            <h4>$229.95</h4>
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