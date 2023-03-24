import React, {useEffect, useRef, useState} from 'react';
import CartItem from "../components/Cart/CartItem";
import Satellite from "../components/Satellite/Satellite";
import styles from "../components/Cart/CartItem.module.scss";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {cartSlice} from "../redux/Cart/slice";
import {cartSelector} from "../redux/Cart/selectors";
import {nanoid} from "nanoid";
import {getDiscount} from "../utils/getDiscount";

const Cart = () => {

    const dispatch = useAppDispatch()
    const {itemsCart, totalPrice, totalCount, totalDiscount} = useAppSelector(cartSelector)

    const [promo, setPromo] = useState(false)
    const [tooltips, setTooltips] = useState(false)
    const [apllyPromo, setApplyPromo] = useState(false)
    const [showDiscount, setShowDiscount] = useState(false)
    const [discount, setDiscount] = useState(false)
    const [valueDiscount, setValueDiscount] = useState<number>(0)
    const [promoCount, setPromoCount] = useState<number>(0)
    const [toOrder, setToOrder] = useState<number>(totalPrice)
    const [enteredPromo, setEnteredPromo] = useState<string>("")
    const [isMounted, setIsMounted] = useState(false)
    const promoRef = useRef<HTMLInputElement>(null)

    const promoСode = [
        {title:"PROMO25" , value:0.25},
        {title:"PROMO50" , value:0.5},
        {title:"PROMOFREE" , value:1}
    ]

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPromo((event.target.value).toUpperCase())
    }
    const onClickSetAccept = () => {
        if(enteredPromo !==""){
            const findPromo = promoСode.find(item => {
                // return ((item === enteredPromo) &&
                //     (enteredPromo !== ""))
                return (item.title === enteredPromo)
            })
            if (findPromo) {
                const d = parseFloat((totalPrice * findPromo.value).toFixed(2))
                setPromoCount(d)
                setApplyPromo(true)
            } else {
                onClickClear()
                alert(`Incorrect promo code`)
            }
        }else{alert(`Enter promo code`)}

    }
    // console.log(enteredPromo);
    const onClickClear = () => {
        setEnteredPromo("")
        setApplyPromo(false)
        promoRef.current?.focus()
    }
    const onClickAddPromo = () => {
        setPromo(!promo)
        setTimeout(() => {
            promoRef.current?.focus()
        }, 500);
    }
    const calcDiscount = () => {
        const a1 = parseFloat((totalDiscount + promoCount).toFixed(2))
        const a2 = parseFloat((totalPrice - valueDiscount).toFixed(2))
        // setValueDiscount(parseFloat((totalDiscount + promoCount).toFixed(2)))
        setValueDiscount(a1)
        // setToOrder(parseFloat((totalPrice - valueDiscount).toFixed(2)))
        setToOrder(a2)
        console.log('отдельно','discount',a1,'_________','to order',a2);
        console.log('в set   ','discount',valueDiscount,'_________','to order',toOrder);
    }
    //TODO бесплатная доставка. проверяем тоталПрайс и показываем сколько добрать для фрииШипа или что уже есть фрииШип
    //TODO подтверждение удаления item из корзины,
    //TODO полная очистка корзины
    const cartItems = itemsCart.map(item => <CartItem {...item} key={nanoid()}/>)

    useEffect(() => {
        // const a1 = parseFloat((totalDiscount + promoCount).toFixed(2))
        // const a2 = parseFloat((totalPrice - valueDiscount).toFixed(2))
        // setValueDiscount(parseFloat((totalDiscount + promoCount).toFixed(2)))
        // setToOrder(parseFloat((totalPrice - valueDiscount).toFixed(2)))
        // console.log('отдельно','discount',a1,'_________','to order',a2);
        // console.log('в set   ','discount',valueDiscount,'_________','to order',toOrder);
        if(isMounted){
            calcDiscount()
        }
        setIsMounted(true)
    }, [apllyPromo, totalDiscount, totalCount])

    useEffect(() => {
        const check = apllyPromo || totalDiscount !== 0 ? setDiscount(true) : (setDiscount(false) , setShowDiscount(false))
    },[apllyPromo, totalDiscount])

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
                            <div className="set__promo">
                                <div className="promo__question">
                                    <p>I Have a Promo Code</p>
                                    {
                                        promo && <div className="question__wrapper">
                                            <img onMouseEnter={() => setTooltips(true)}
                                                 onMouseLeave={() => setTooltips(false)}
                                                 width={17} height={17} src="/img/question-square.svg" alt="cart"/>
                                            <div className={tooltips ? "tooltips__on" : "tooltips"}>
                                                <p>try PROMO25 , PROMO50 and PROMOFREE</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                                <p onClick={() => onClickAddPromo()} className="add__promo">+</p>
                            </div>
                            <div className={promo ? "promo__on" : "promo"}>
                                <input
                                    ref={promoRef}
                                    value={enteredPromo}
                                    onChange={onChangeInput}
                                    className="text_field"
                                    type="text"
                                    placeholder="Enter Promo"/>
                                {enteredPromo &&
                                    <svg
                                        onClick={() => onClickClear()}
                                        className="clearIcon"
                                        height="25" viewBox="0 0 48 48" width="25" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                                        <path d="M0 0h48v48h-48z" fill="none"/>
                                    </svg>
                                }
                                <div onClick={() => onClickSetAccept()} className="button cart__promo">Accept</div>
                            </div>
                        </div>
                        <hr/>
                        <div className="estimate_total-wrapper">
                            <div className="estimate_total">
                                <b>Total</b>
                                <b>$ {totalPrice}</b>
                            </div>
                            {discount &&
                                <div className="discount">
                                    <div className="discount__text">
                                        Discounts
                                    </div>
                                    <div className="discount_dropdown-wrapper">
                                        <span>-{valueDiscount} $</span>
                                        <svg onClick={() => setShowDiscount(!showDiscount)}
                                             className={showDiscount ? "discount_dropdown down" : "discount_dropdown"}
                                             xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1"
                                             viewBox="0 0 24 24" width="18" height="18">
                                            <path
                                                d="M12,15.5a1.993,1.993,0,0,1-1.414-.585L5.293,9.621,6.707,8.207,12,13.5l5.293-5.293,1.414,1.414-5.293,5.293A1.993,1.993,0,0,1,12,15.5Z"/>
                                        </svg>
                                    </div>
                                </div>
                            }
                            <div>
                                {showDiscount &&
                                    <div>
                                        {apllyPromo &&
                                            <div className="apply_promo-wrapper">
                                                <div className="apply_promo">Apply promo: {enteredPromo}</div>
                                                <div className="apply_promo-count">
                                                    <span>-{promoCount} $</span>
                                                    <svg
                                                        onClick={() => onClickClear()}
                                                        className="resetPromo"
                                                        height="18" width="18" viewBox="0 0 48 48"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
                                                        <path d="M0 0h48v48h-48z" fill="none"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        }
                                        {totalDiscount !== 0 &&
                                            <div className="apply_promo-wrapper">
                                                <div className="apply_promo">3 units discount</div>
                                                <div className="apply_promo-count">
                                                    <span className="total_discount">-{totalDiscount} $</span>
                                                </div>
                                            </div>
                                        }
                                    </div>
                                }
                            </div>
                            <div className="estimate_total">
                                <b>To order</b>
                                <b>$ {toOrder}</b>
                            </div>
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