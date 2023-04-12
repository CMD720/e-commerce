import React from 'react';
import {CartItem, OrderDiscount} from "../components";
import {useAppSelector} from "../redux/storeHooks";
import {cartSelector} from "../redux/Cart/selectors";
import {nanoid} from "nanoid";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const navigate = useNavigate()
    const {itemsCart, totalPrice} = useAppSelector(cartSelector)

    const cartItems = itemsCart.map(item => <CartItem {...item} key={nanoid()}/>)

    return (
        <div className="container">
            {totalPrice !== 0
                ? <div className="cart">
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
                    </div>
                  </div>
                : <div className="cart--empty">
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