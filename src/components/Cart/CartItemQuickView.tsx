import React from 'react';
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import styles from "./CartItem.module.scss"

const CartItemQuickView = () => {
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
                <Link to={"/cart"}>
                    <div className="button cart__qv__bottom">View Cart</div>
                </Link>
            </div>
        </div>
    );
};

export default CartItemQuickView;