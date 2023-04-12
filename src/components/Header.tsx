import React, {useEffect, useRef} from 'react';
import {Link, useLocation} from "react-router-dom";
import {CartItemQuickView, Categories, Modal, Search} from "./index";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {modalOnOff} from "../redux/Modal/slice";
import {modalSelector} from "../redux/Modal/selectors";
import {setReset} from "../redux/Filter/slice";
import {cartSelector} from "../redux/Cart/selectors";

const Header = () => {
    const dispatch = useAppDispatch()
    const {modalCart} = useAppSelector(modalSelector)
    const cart = useAppSelector(cartSelector)
    const {itemsCart, totalCount} = useAppSelector(cartSelector)
    const isMounted = useRef(false)
    const {pathname} = useLocation()

    useEffect(() => {
        if (isMounted.current) {
            const jsonCart = JSON.stringify(cart)
            localStorage.setItem('cart', jsonCart)
        }
        isMounted.current = true
    }, [itemsCart])

    return (
        <div className="header">
            <div className="container">
                <Link to="/" onClick={() => dispatch(setReset())}>
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
                    {pathname !== '/cart' &&<Search/>}
                    {pathname !== '/cart' &&
                        <div className={totalCount !== 0 ? "cart--icon full" : "cart--icon"}>
                            <span>{totalCount}</span>
                            {totalCount !== 0
                                ? <img onClick={() => dispatch(modalOnOff('cart'))} width={25} height={25}
                                       src="/img/cart.svg" alt="cart"/>
                                : <img width={25} height={25} src="/img/cart.svg" alt="cart"/>}
                        </div>
                    }
                </div>
            </div>
            <Modal show={modalCart}>
                <CartItemQuickView/>
            </Modal>
        </div>
    );
};

export default Header;