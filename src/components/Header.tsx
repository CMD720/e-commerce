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
import Modal2 from "./Modal/mod2/Modal2";
import {modalSelector} from "../redux/Modal/selectors";
import {setReset} from "../redux/Filter/slice";

const Header = () => {
    const dispatch = useAppDispatch()
    const {modalCart} = useAppSelector(modalSelector)
    const [itemOnCart, setItemOnCart] = useState(false)


    const onClickCart = () => {
        setItemOnCart(!itemOnCart)
    }
    return (
        <div className="header">
            <div className="container">
                <Link to="/" onClick={()=> dispatch(setReset())}>
                    <div className="header__logo">
                        <img onClick={() => onClickCart()} width={50} height={50} src="/img/logo.svg"
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
                    <div className={itemOnCart ? "cart--icon full" : "cart--icon"}>
                        <span>9</span>
                        {itemOnCart
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