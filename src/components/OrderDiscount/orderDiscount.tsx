import React, {useEffect, useRef, useState} from 'react';
import {cartSelector} from "../../redux/Cart/selectors";
import {useAppSelector} from "../../redux/storeHooks";
import Tooltip from "../Tooltip/Tooltip";

const OrderDiscount = () => {
    const {totalPrice, totalDiscount} = useAppSelector(cartSelector)

    const [promo, setPromo] = useState(false)
    const [tooltips, setTooltips] = useState(false)
    const [promoView, setPromoView] = useState(false)
    const [showDiscount, setShowDiscount] = useState(false)
    const [discount, setDiscount] = useState(false)
    const [valueDiscount, setValueDiscount] = useState<number>(0)
    const [promoCount, setPromoCount] = useState<number>(0)
    const [toOrder, setToOrder] = useState<number>(totalPrice)
    const [enteredPromo, setEnteredPromo] = useState<string>("")
    const promoRef = useRef<HTMLInputElement>(null)

    const promoCode = [
        {title: "PROMO15", value: 0.15},
        {title: "PROMO25", value: 0.25},
        {title: "PROMO50", value: 0.5},
    ]

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredPromo((event.target.value).toUpperCase())
    }
    const keyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickAccept()
        }
    }
    const onClickAccept = () => {
        if (enteredPromo !== "") {
            calcPromo()
        } else {
            alert(`Enter promo code`)
        }
    }
    const calcPromo = () => {
        const findPromo = promoCode.find(item => {
            return (item.title === enteredPromo)
        })
        if (findPromo) {
            const d = parseFloat((totalPrice * findPromo.value).toFixed(2))
            setPromoCount(d)
            setPromoView(true)
        } else {
            onClickClear()
            alert(`Incorrect promo code`)
        }
    }
    const onClickClear = () => {
        setEnteredPromo("")
        setPromoCount(0)
        setPromoView(false)
        promoRef.current?.focus()
    }
    const onClickAddPromo = () => {
        setPromo(!promo)
        setTimeout(() => {
            promoRef.current?.focus()
        }, 500);
    }
    const calcDiscount = () => {
        if (totalPrice === 0) {
            setEnteredPromo("")
            setPromoCount(0)
            setPromoView(false)
            setPromo(false)
        }
        if (enteredPromo !== "") {
            calcPromo();
        }
        setValueDiscount(parseFloat((totalDiscount + promoCount).toFixed(2)));
        setToOrder(parseFloat((totalPrice - valueDiscount).toFixed(2)));
    }

    useEffect(() => {
        calcDiscount()
    }, [promoCount, totalDiscount, totalPrice, valueDiscount, toOrder])

    useEffect(() => {
        const check = promoView || totalDiscount !== 0 ? setDiscount(true) : (setDiscount(false) , setShowDiscount(false))
    }, [promoView, totalDiscount])

    //TODO style for tooltip
    return (
        <div className="price__cart">
            <div className="promo__wrapper">
                {totalPrice !== 0 &&
                    <div className="set__promo">
                        <div className="promo__question">
                            <p>I Have a Promo Code</p>
                            {/*{*/}
                            {/*    promo && <div className="question__wrapper">*/}
                            {/*        <img onMouseEnter={() => setTooltips(true)}*/}
                            {/*             onMouseLeave={() => setTooltips(false)}*/}
                            {/*             width={17} height={17} src="/img/question-square.svg" alt="cart"/>*/}
                            {/*        <div className={tooltips ? "tooltips__on" : "tooltips"}>*/}
                            {/*            <p>try PROMO15 , PROMO25 and PROMO50</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*}*/}
                            {
                                promo && <Tooltip title="try PROMO15 , PROMO25 or PROMO50">
                                    <img onMouseEnter={() => setTooltips(true)}
                                         onMouseLeave={() => setTooltips(false)}
                                         width={17} height={17} src="/img/question-square.svg" alt="cart"/>
                                </Tooltip>
                            }

                        </div>
                        <div onClick={() => onClickAddPromo()} className="add__promo">
                            <img className={!promo ? "on" : "off"} src="/img/remove-item.svg" alt="add promo"/>
                        </div>
                    </div>
                }
                <div className={promo ? "promo__on" : "promo"}>
                    <input
                        ref={promoRef}
                        value={enteredPromo}
                        onChange={onChangeInput}
                        onKeyDown={keyPress}
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
                    <div onClick={() => onClickAccept()} className="button cart__promo">Accept</div>
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
                            {promoView &&
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
    );
};

export default OrderDiscount;