import React, {useEffect, useRef, useState} from 'react';
import CartItem from "../components/Cart/CartItem";
import Satellite from "../components/Satellite/Satellite";
import styles from "../components/Cart/CartItem.module.scss";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {cartSlice} from "../redux/Cart/slice";
import {cartSelector} from "../redux/Cart/selectors";
import {nanoid} from "nanoid";
import {getDiscount} from "../utils/getDiscount";
import OrderDiscount from "../components/Cart/orderDiscount";
import {useNavigate} from "react-router-dom";
import Footer from "../components/Footer";

const Cart = () => {
    //TODO упаковать промо , стоймость и оплату в отдельный компонент
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {itemsCart, totalPrice, totalCount, totalDiscount} = useAppSelector(cartSelector)


    //TODO бесплатная доставка. проверяем тоталПрайс и показываем сколько добрать для фрииШипа или что уже есть фрииШип
    //TODO полная очистка корзины
    //TODO рендер пустой корзины типа: "Ваша корзина пуста" и кнопка на главную или нулевую категорию
    const cartItems = itemsCart.map(item => <CartItem {...item} key={nanoid()}/>)


    return (
        <div className="container">
            {
                totalPrice !== 0 ?

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
                            <OrderDiscount/>
                        </div>
                        <div className="bottom__cart">
                            {/*<p>YOU MAY ALSO LIKE...</p>*/}
                            {/*<Satellite/>*/}
                        </div>
                    </div> :

                    <div className="cart--empty">
                        <h2 className="content__title">
                            Cart is empty
                        </h2>
                        <div className="prompt">
                            try add something to cart
                        </div>
                        <div className="button" onClick={() => navigate("/")}>Home</div>
                    </div>
            }
        </div>
    );
};

export default Cart;