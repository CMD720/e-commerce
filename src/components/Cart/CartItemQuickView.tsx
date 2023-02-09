import React from 'react';
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import styles from "./CartItem.module.scss"
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {modalSelector} from "../../redux/Modal/selectors";
import {modalOnOff} from "../../redux/Modal/slice";

const CartItemQuickView = () => {
    const dispatch = useAppDispatch()
    // const {modalCart} = useAppSelector(modalSelector)
    return (
        <div className={styles.quick_view}>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            {/*<ItemCard/>*/}
            <div className={styles.bottom}>
                <hr/>
                <div className={styles.estimate_total}>
                    <b>Estimated Total</b>
                    <b>$ 999</b>
                </div>
                <Link to='/cart'>
                    <div onClick={() => dispatch(modalOnOff('cart'))}
                         className="button cart__qv__bottom">
                        View Cart
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CartItemQuickView;