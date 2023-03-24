import React, {FC, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import  styles from './CartItem.module.scss'
import {TCartItem} from "../../redux/Cart/types";
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {addItem, removeItem, removeItemFull} from "../../redux/Cart/slice";
import {modalOnOff} from "../../redux/Modal/slice";
import {resetColor, setCategoryId} from "../../redux/Filter/slice";
import {filterSelector} from "../../redux/Filter/selectors";
import {getDiscount} from "../../utils/getDiscount";

// type CartItemProps={
//     style?: "quick" | "other" | "",
//     item: TCartItem,
// }

const CartItem: FC<TCartItem> = (item:TCartItem) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    // const {} = useAppSelector(filterSelector)

    const {uId, id, title, size, price, image, itemCount, category} = item
    const total = parseFloat((price * itemCount).toFixed(2));
    const [discount, setDiscount] = useState<number>(0)
    const onClickCart = () => {
        navigate(`/item/${id}`)
        dispatch(setCategoryId(category))
        dispatch(resetColor())
    }

    const onClickRemoveItem = () => {
        if(window.confirm("Are you sure, you want to remove?")){
            dispatch(removeItemFull(item))
        }
    }

    useEffect(() => {
        if(itemCount >= 3){
            const d = getDiscount(price, itemCount)
            // console.log('getDisc', d);
            setDiscount(d.discount)
        }
    },[itemCount])
    return (
        <div className={styles.cart}>
            <div className={styles.cart__wrapper}>
                <div className={styles.item__image}>
                    {/*<Link to={`/item/${id}`}>*/}
                        <img onClick={() => onClickCart()}
                             src={image}
                             alt={title}
                        />
                    {/*</Link>*/}
                </div>
                <div className={styles.item__features}>
                    <ul>
                        <li><b>{title}</b></li>
                        <li>size:<p>{size}</p></li>
                    </ul>
                </div>
                <div onClick={() => dispatch(removeItemFull(item))} className={styles.item__remove}>
                {/*<div onClick={() => onClickRemoveItem()} className={styles.item__remove}>*/}
                    <svg width="15px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/>
                        <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/>
                    </svg>
                </div>
            </div>
            <div className={styles.item__value}>
                <ul>
                    <li>Each</li>
                    <li><b>${price}</b></li>
                </ul>
                <div className={styles.item__count}>
                    <button disabled={itemCount === 1} onClick={()=>dispatch(removeItem(item))} className={styles.del}>
                        <svg width="15" height="15" viewBox="0 0 10 10"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                ></path>
                        </svg>
                    </button>
                    <b>{itemCount}</b>
                    <button onClick={()=>dispatch(addItem(item))} className={styles.add}>
                        <svg width="15" height="15" viewBox="0 0 10 10"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                                ></path>
                            <path
                                d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                                ></path>
                        </svg>
                    </button>
                </div>
                {/*<p className={styles.item__coast}>Total <p><b>{cost * count}</b></p></p>*/}
                <ul className={styles.item__coast}>
                    <li>Total</li>

                    {itemCount>=3
                        ? <div>
                            <li><b><s>{total}</s></b></li>
                            <li><b>{discount}</b></li>
                          </div>
                        :<li><b>{total}</b></li>}
                </ul>
            </div>
            <hr/>
        </div>
    );
};

export default CartItem;
