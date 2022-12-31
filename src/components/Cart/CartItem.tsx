import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";
import  styles from './CartItem.module.scss'

type CartItemProps={
    style?: "quick" | "other" | ""
}

const CartItem: FC<CartItemProps> = () => {

    const [count, setCount] = useState(1);
    const cost = 229;
    const total = cost * count;

    const del = () => {
      setCount(count-1)
    }
    const add = () => {
      setCount(count+1)
    }

    return (
        <div className={styles.cart}>
            <div className={styles.cart__wrapper}>
                <div className={styles.item__image}>
                    <Link to={`/item/`}>
                        <img className="image__card"
                             src="https://s7d2.scene7.com/is/image/FoxRacing/29659001_1?$dw_pm1$&wid=400&hei=400&fmt=webp-alpha"
                            // TODO подставить id категории
                             alt="category ID"
                        />
                    </Link>
                </div>
                <div className={styles.item__features}>
                    <ul>
                        <li><b>V1 TOXSYK HELMET</b></li>
                        <li>size:<p>XL</p></li>
                        <li>color:<p>Black</p></li>
                    </ul>
                </div>
                <div className={styles.item__remove}>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
                        <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
                    </svg>
                </div>
            </div>
            <div className={styles.item__value}>
                {/*<p>Each<b>${cost}</b></p>*/}
                <ul>
                    <li>Each</li>
                    <li><b>${cost}</b></li>
                </ul>
                <div className={styles.item__count}>
                    <div onClick={()=>del()} className={styles.del}>
                        <svg width="15" height="15" viewBox="0 0 10 10"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                ></path>
                        </svg>
                    </div>
                    <b>{count}</b>
                    <div onClick={()=>add()} className={styles.add}>
                        <svg width="15" height="15" viewBox="0 0 10 10"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                ></path>
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                ></path>
                        </svg>
                    </div>
                </div>
                {/*<p className={styles.item__coast}>Total <p><b>{cost * count}</b></p></p>*/}
                <ul className={styles.item__coast}>
                    <li>Total</li>
                    <li><b>{cost * count}</b></li>
                </ul>
            </div>
            <hr/>
        </div>
    );
};

export default CartItem;
