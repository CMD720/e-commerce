import React, {FC, ReactNode, useCallback, useEffect} from 'react';
import styles from './Modal.module.scss'
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {modalOnOff} from "../../redux/Modal/slice";
import {modalSelector} from "../../redux/Modal/selectors";
import {createPortal} from "react-dom";
import PortalModal from "./PortalModal";

// type Tstyle = {
//     style: "cart" | "other"
// }

type ModalProps = {
    style?: "cart" | "other" | ""
    show: boolean
    // children?: ReactNode
    children?: JSX.Element | JSX.Element[]
}
const Modal: FC<ModalProps> =
    ({
         style,
         show,
         children,
     }) => {

        // console.log('children',children)
        ///////////
        const dispatch = useAppDispatch()
        const {modalCart, modal} = useAppSelector(modalSelector)

        const activeModal = modalCart ? 'cart' : 'modal'
        const rootClasses = []
        // const shows = modalCart || modal

        if(show){
            rootClasses.push(modalCart ? [styles.cart] : [styles.modal])
        }

        // const modalRef = useRef<HTMLDivElement>(null)
        // handle what happens on click outside of modal
        // const handleClickOutside = () => setShow(false)
        // const handleClickOutside = () => dispatch(modalOnOffCart('cart'))
        // useOnClickOutside(modalRef, handleClickOutside)

        // handle what happens on key press
        const handleKeyPress = useCallback((event: KeyboardEvent) => {
            // if (event.key === "Escape") dispatch(modalOnOffCart('cart'))
            if (event.key === "Escape") dispatch(modalOnOff(activeModal))
        }, [])

        useEffect(() => {
            // if (modalCart) {
            if (show) {
                // attach the event listener if the modal is shown
                document.addEventListener("keydown", handleKeyPress)
                // remove the event listener
                return () => {
                    document.removeEventListener("keydown", handleKeyPress)
                }
            }
            // }, [handleKeyPress, modalCart])
        }, [handleKeyPress, show])


        console.log("show - ",show)

        return (
            <>
                {show && (
                    <PortalModal wrapperId='modal-portal'>
                        {/*<div onClick={() => dispatch(modalOnOffCart('cart'))} className={styles.cart}>*/}
                        <div className={rootClasses.join(' ')} onClick={() => dispatch(modalOnOff(activeModal))}>
                            <div className={styles.modal_content} onClick={event => event.stopPropagation()}>
                                <div className={styles.close_modal} onClick={() => dispatch(modalOnOff(activeModal))}>
                                    <svg viewBox="0 0 256 256" strokeWidth="6" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M183.191,174.141c2.5,2.498,2.5,6.552,0,9.05c-1.249,1.25-2.889,1.875-4.525,1.875c-1.638,0-3.277-0.625-4.525-1.875  l-46.142-46.142L81.856,183.19c-1.249,1.25-2.888,1.875-4.525,1.875c-1.638,0-3.277-0.625-4.525-1.875c-2.5-2.498-2.5-6.552,0-9.05  l46.143-46.143L72.806,81.856c-2.5-2.499-2.5-6.552,0-9.05c2.497-2.5,6.553-2.5,9.05,0l46.142,46.142l46.142-46.142  c2.497-2.5,6.553-2.5,9.051,0c2.5,2.499,2.5,6.552,0,9.05l-46.143,46.142L183.191,174.141z M256,128C256,57.42,198.58,0,128,0  C57.42,0,0,57.42,0,128c0,70.58,57.42,128,128,128C198.58,256,256,198.58,256,128z M243.2,128c0,63.521-51.679,115.2-115.2,115.2  c-63.522,0-115.2-51.679-115.2-115.2C12.8,64.478,64.478,12.8,128,12.8C191.521,12.8,243.2,64.478,243.2,128z"
                                            stroke="#9B9B9B"/>
                                    </svg>
                                </div>
                                <div className={styles.view_content}>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </PortalModal>
                )}
            </>
        );
    };

export default Modal;
