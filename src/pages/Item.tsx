import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {modalOnOff} from "../redux/Modal/slice";
import Modal from "../components/Modal/Modal";
import SizeGuide from "../components/SizeGuide";
import {nanoid} from "nanoid";
import {modalSelector} from "../redux/Modal/selectors";

const Item = () => {

    const dispatch = useAppDispatch()
    const {modal} = useAppSelector(modalSelector)

    const imgUrls = [
        "https://s7d2.scene7.com/is/image/FoxRacing/29667033_1?$dw_detn2$&fmt=webp-alpha",
        "https://s7d2.scene7.com/is/image/FoxRacing/29667033_4?$dw_detn2$&fmt=webp-alpha",
        "https://s7d2.scene7.com/is/image/FoxRacing/29667033_5?$dw_detn2$&fmt=webp-alpha",
    ]
    const imgBigUrls = [
        "https://s7d2.scene7.com/is/image/FoxRacing/29667033_1?$dw_detn1$&fmt=webp-alpha",
        "https://s7d2.scene7.com/is/image/FoxRacing/29667033_4?$dw_detn1$&fmt=webp-alpha",
        "https://s7d2.scene7.com/is/image/FoxRacing/29667033_5?$dw_detn1$&fmt=webp-alpha",
    ]

    const [url, setUrl] = useState(imgBigUrls[0])
    const [activeImg, setActiveImg] = useState(0)

    const sizes = ['s', 'm', 'l', 'xl']
    const [activeSize, setActiveSize] = useState(sizes.length)

    const onClickImg = (index:number) => {
        setUrl(imgBigUrls[index]);
        setActiveImg(index);
    }

    const onClickNextImg = () => {
        const index = activeImg === imgBigUrls.length - 1 ? 0 : activeImg + 1
        setUrl(imgBigUrls[index]);
        setActiveImg(index);
    }
    const onClickPreviousImg = () => {
        const index = activeImg === 0  ? imgBigUrls.length - 1 : activeImg - 1
        setUrl(imgBigUrls[index]);
        setActiveImg(index);
    }

    return (
        <div className="item__container">
            <div className="item__slider">
                <div className="slider__mini">
                    {
                        imgUrls.map((imgUrl, index) => (
                            <img onClick={()=> onClickImg(index)}
                                 src={imgUrl} className={activeImg === index ?"active" :""}
                                 alt=""
                                 key={nanoid()}
                            />
                        ))
                    }
                </div>
                <div className="slider__big">
                    <div className="previous__img" onClick={()=>onClickPreviousImg()}><div className="arrow__img"/></div>
                    <img src={url} alt=""/>
                    <div className="next__img" onClick={()=>onClickNextImg()}><div className="arrow__img"/></div>
                </div>
            </div>
            <div className="item__description">
                <div className="item__title" >V1 BNKR HELMET</div>
                <div className="item__price">$229</div>
                <div>color</div>
                <div>Size - <b>{activeSize === sizes.length ? 'select size' :sizes[activeSize]}</b></div>
                <div className="item__size__selector">
                    <ul>
                        {
                            sizes.map((size, i) => (
                                <li
                                    className={activeSize === sizes.length ? '' : activeSize === i ? 'active' : ''}
                                    onClick={() => setActiveSize(i)}
                                    key={i}>
                                    {size}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="item__guide" onClick={()=>dispatch(modalOnOff('modal'))} >size guide</div>
                <div className="button">Add to Card</div>
            </div>
            <Modal show={modal}>
                <SizeGuide/>
            </Modal>
        </div>
    );
};

export default Item;