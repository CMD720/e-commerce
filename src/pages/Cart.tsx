import React, {useState} from 'react';
import CartItem from "../components/Cart/CartItem";
import Satellite from "../components/Satellite/Satellite";
import styles from "../components/Cart/CartItem.module.scss";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {cartSlice} from "../redux/Cart/slice";
import {cartSelector} from "../redux/Cart/selectors";
import {nanoid} from "nanoid";

const Cart = () => {

    const dispatch = useAppDispatch()
    const {itemsCart, totalPrice, totalCount} = useAppSelector(cartSelector)

    const [promo, setPromo] = useState(false)


    //TODO бесплатная доставка. проверяем тоталПрайс и показываем сколько добрать для фрииШипа или что уже есть фрииШип
    //TODO подтверждение удаления item из корзины,
    //TODO полная очистка корзины
    const cartItems = itemsCart.map(item => <CartItem {...item} key={nanoid()}/>)
    return (
        <div className="container">
            <div className="cart">
                <h2 className="content__title">
                    Your Cart
                </h2>
                <div className="wrapper__item__price">
                    <div className="item__cart">
                        {
                            cartItems
                        }
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
                            <b>$ {totalPrice}</b>
                        </div>
                        <hr/>
                        <div className="button cart__pay">Pay Pal</div>
                    </div>
                </div>
                <div className="bottom__cart">
                    {/*<p>YOU MAY ALSO LIKE...</p>*/}
                    {/*<Satellite/>*/}
                </div>
            </div>


        </div>
    );
};

export default Cart;