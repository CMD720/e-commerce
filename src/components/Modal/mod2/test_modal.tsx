import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/storeHooks";
import {modalSelector} from "../../../redux/Modal/selectors";
import Modal2 from "./Modal2";
import {modalOnOff} from "../../../redux/Modal/slice";
import CartItemQuickView from "../../Cart/CartItemQuickView";
import SizeGuide from "../../SizeGuide";

const TestModal = () => {

    const dispatch = useAppDispatch()
    const {modalCart, modal} = useAppSelector(modalSelector)

    const [show1, setShow1] = useState<boolean>(false)
    const showModal = () => {
        setShow1(true)
        dispatch(modalOnOff('cart'))
    }

    return (
        <div>
            {/*<button className="button" onClick={()=>setShow1(true)}/>*/}
            <button className="button" onClick={()=>dispatch(modalOnOff('cart'))}>MODAL 1</button>
            <button className="button" onClick={()=>dispatch(modalOnOff('modal'))}>MODAL 2</button>

            <Modal2 show={modalCart}>
                <h1>My Modal 1</h1>
                <p>Reusable Modal with options to customize.</p>
                <CartItemQuickView/>
            </Modal2>
            <Modal2 show={modal}>
                <h1>My Modal 2</h1>
                <p>Reusable Modal with options to customize.</p>
                <SizeGuide/>
            </Modal2>
        </div>
    );
};

export default TestModal;