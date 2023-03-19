import React from 'react';
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import styles from "./CartItem.module.scss"
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {modalSelector} from "../../redux/Modal/selectors";
import {modalOnOff} from "../../redux/Modal/slice";
import {cartSelector} from "../../redux/Cart/selectors";
import {nanoid} from "nanoid";
import {setReset} from "../../redux/Filter/slice";

const CartItemQuickView = () => {
    const dispatch = useAppDispatch()
    const {itemsCart, totalPrice, totalCount} = useAppSelector(cartSelector)
    // const {modalCart} = useAppSelector(modalSelector)

    const onClickViewCart = () => {
        dispatch(modalOnOff('cart'))
        dispatch(setReset())
    }
    const cartItems = itemsCart.map(item => <CartItem {...item} key={nanoid()}/>)
    return (
        <div className={styles.quick_view}>
            {cartItems}
            <div className={styles.bottom}>
                <hr/>
                <div className={styles.estimate_total}>
                    <b>Estimated Total</b>
                    <b>$ {totalPrice}</b>
                </div>
                <Link to='/cart'>
                    <div onClick={() => onClickViewCart()}
                         className="button cart__qv__bottom">
                        View Cart
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CartItemQuickView;