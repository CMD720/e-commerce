import React, {useState} from 'react';
import CartItem from "../components/Cart/CartItem";
import Satellite from "../components/Satellite/Satellite";
import styles from "../components/Cart/CartItem.module.scss";

const Cart = () => {

    const [promo, setPromo] = useState(false)

    return (
        <div className="container">
            <div className="cart">
                <h2 className="content__title">
                    Your Cart
                </h2>
                <div className="wrapper__item__price">
                    <div className="item__cart">
                        <CartItem/>
                    </div>
                    <div className="price__cart">
                        <div className="promo__wrapper">
                            <div className="set__promo" onClick={() => setPromo(!promo)}>
                                <p>I Have a Promo Code</p>
                                <p>+</p>
                            </div>
                            <div className={promo ? "promo__on" : "promo"}>
                                <input className="text_field"  type="text" placeholder="Enter Promo"/>
                                <div className="button cart__promo">Accept</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="estimate_total">
                            <b>Estimated Total</b>
                            <b>$ 999</b>
                        </div>
                        <hr/>
                        <div className="button cart__pay">Pay Pal</div>
                    </div>
                </div>
                <div className="bottom__cart">
                    <p>YOU MAY ALSO LIKE...</p>
                    <Satellite/>
                </div>
            </div>


        </div>
    );
};

export default Cart;