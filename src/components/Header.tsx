import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Search from "./Search";
import Categories from "./Categories";
import Modal from "./Modal/Modal";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {modalOnOff} from "../redux/Modal/slice";
import BannerTop from "./Banner/BannerTop";
import ItemCard from "./ItemCard";
import CartItem from "./Cart/CartItem";
import CartItemQuickView from "./Cart/CartItemQuickView";
import {modalSelector} from "../redux/Modal/selectors";
import {resetColor, setReset} from "../redux/Filter/slice";
import {cartSelector} from "../redux/Cart/selectors";

const Header = () => {
    const dispatch = useAppDispatch()
    const {modalCart} = useAppSelector(modalSelector)
    const [itemOnCart, setItemOnCart] = useState(false)
    const {itemsCart, totalPrice, totalCount} = useAppSelector(cartSelector)


    const onClickCart = () => {
        dispatch(modalOnOff('cart'))
        dispatch(resetColor())
    }

    return (
        <div className="header">
            <div className="container">
                <Link to="/" onClick={()=> dispatch(setReset())}>
                    <div className="header__logo">
                        <img width={50} height={50} src="/img/logo.svg"
                             alt="fox head - logo"/>
                        <div>
                            <h1>foxracing</h1>
                            <p>MX-Shop</p>
                        </div>
                    </div>
                </Link>
                <div className="header__categories">
                </div>
                <div className="header__cart">
                    <Categories/>
                    <Search/>
                    <div className={totalCount !==0 ? "cart--icon full" : "cart--icon"}>
                        <span>{totalCount}</span>
                        {totalCount !==0
                            ? <img onClick={() => dispatch(modalOnOff('cart'))} width={25} height={25}
                                   src="/img/cart.svg" alt="cart"/>
                            : <img width={25} height={25} src="/img/cart.svg" alt="cart"/>}
                    </div>
                </div>
            </div>
            <Modal show={modalCart}>
                <CartItemQuickView/>
            </Modal>
        </div>
    );
};

export default Header;