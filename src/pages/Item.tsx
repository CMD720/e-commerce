import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {modalOnOff} from "../redux/Modal/slice";
import {Loader, Modal, Satellite, SizeGuide} from "../components";
import {nanoid} from "nanoid";
import {modalSelector} from "../redux/Modal/selectors";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {filterSelector} from "../redux/Filter/selectors";
import {resetColor, setColor} from "../redux/Filter/slice";
import {TItem} from "../redux/Item/types";
import {TCartItem} from "../redux/Cart/types";
import {addItem} from "../redux/Cart/slice";


const Item: FC = () => {

    const {id} = useParams()
    const navigate = useNavigate()

    const [item, setItem] = useState<TItem>({
        id: '',
        category: 0,
        imageUrl: [],
        imageMiniUrl: [],
        title: '',
        sizes: [],
        price: 0,
        color: 0,
        colortypes: []
    })

    const dispatch = useAppDispatch()
    const {modal} = useAppSelector(modalSelector)
    const {color} = useAppSelector(filterSelector)

    const [isLoading, setIsLoading] = useState(true)
    const [url, setUrl] = useState(item.imageUrl[0])
    const [activeImg, setActiveImg] = useState(0)
    const [activeSize, setActiveSize] = useState(item.sizes.length)
    const [category, setCategory] = useState(-1)
    const [loadable, setLoadable] = useState(false)


    const onClickImg = (index: number) => {
        setUrl(item.imageUrl[index]);
        setActiveImg(index);
    }
    const onClickNextImg = () => {
        const index = activeImg === item.imageUrl.length - 1 ? 0 : activeImg + 1
        setUrl(item.imageUrl[index]);
        setActiveImg(index);
    }
    const onClickPreviousImg = () => {
        const index = activeImg === 0 ? item.imageUrl.length - 1 : activeImg - 1
        setUrl(item.imageUrl[index]);
        setActiveImg(index);
    }
    const onSelectColor = (indexColor: number) => {
        dispatch(setColor(indexColor))
    }
    const onClickBack = () => {
        dispatch(resetColor())
        navigate(-1)
    }
    const changeColor = async () => {
        try {
            const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items?category=${category}`)
            const result = data.find((item: TItem) => item.color === color)
            if (result) {
                setItem(result)
                setUrl(result.imageUrl[0])
                setLoadable(false)
                navigate(`/item/${result.id}`)
            } else {
                alert('Change color failure')
                navigate(-1)
            }
            setIsLoading(false)
        } catch (error) {
            alert('Change color failure')
            navigate(-1)
        }
    }
    const fetchItem = async () => {
        try {
            const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items/${id}`)
            setItem(data)
            setUrl(data.imageUrl[0])
            setActiveSize(data.sizes.length)
            setCategory(data.category)
            setIsLoading(false)
        } catch (error) {
            alert('EFI - (error fetch item)')
            navigate(-1)
        }
    }
    const clickAddCard = () => {
        if (activeSize === item.sizes.length) {
            alert(`Please, Select size`)
        } else {
            const Item: TCartItem = {
                uId: nanoid(),
                id: item.id,
                title: item.title,
                price: item.price,
                category: item.category,
                size: item.sizes[activeSize].toString().toUpperCase(),
                image: item.imageUrl[0],
                itemCount: 0,
                itemDiscount: 0
            }
            dispatch(addItem(Item))
        }
    }
    useEffect(() => {
        if (loadable) {
            setIsLoading(true)
            color >= 0
                ? changeColor()
                : fetchItem()
        }
        setLoadable(true)

    }, [color, id])

    useEffect(() => {
        fetchItem()
    }, [])

    if (!item) {
        return <Loader/>
    }
    return (
        isLoading
            ? <Loader/>
            :
            <div className="item__container">
                <div className="test">
                    <div className="item__wrapper">
                        <div className="item__slider">
                            <div className="slider__mini">
                                {
                                    item.imageMiniUrl.map((imgUrl, index) => (
                                        <img onClick={() => onClickImg(index)}
                                             onMouseEnter={() => onClickImg(index)}
                                             src={imgUrl} className={activeImg === index ? "active" : ""}
                                             alt={item.title}
                                             key={nanoid()}
                                        />
                                    ))
                                }
                            </div>
                            <div className="slider__big">
                                <div className="previous__img" onClick={() => onClickPreviousImg()}>
                                    <div className="arrow__img"/>
                                </div>
                                <img src={url} alt={item.title}/>
                                <div className="next__img" onClick={() => onClickNextImg()}>
                                    <div className="arrow__img"/>
                                </div>
                            </div>
                        </div>
                        <div className="item__description">
                            <div className="item__title">{item.title}</div>
                            <div className="item__price">${item.price}</div>
                            <div className="item__color">color -
                                <div className="colors">
                                    {
                                        item.colortypes.map((colortype, index) => (
                                            <b onClick={() => onSelectColor(index)}
                                               className={item.color !== index ? colortype : `${colortype} activeColor`}
                                               key={nanoid()}
                                            >
                                            </b>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>Size
                                - <b>{activeSize === item.sizes.length ? 'select size' : item.sizes[activeSize]}</b>
                            </div>
                            <div className="item__size__selector">
                                <ul>
                                    {
                                        item.sizes.map((size, i) => (
                                            <li
                                                className={activeSize === item.sizes.length ? '' : activeSize === i ? 'active' : ''}
                                                onClick={() => setActiveSize(i)}
                                                key={nanoid()}>
                                                {size}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                            {
                                category !== 1 && category !== 3
                                    ?
                                    <div className="item__guide" onClick={() => dispatch(modalOnOff('modal'))}>size
                                        guide</div>
                                    : <></>
                            }
                            <div onClick={() => clickAddCard()} className="button">Add to Card</div>
                            <br/>
                            <div onClick={() => onClickBack()} className="button">Back</div>
                        </div>


                        <Modal show={modal}>
                            <SizeGuide category={category}/>
                        </Modal>
                    </div>
                    <hr/>
                    <div className="item__bottom">
                        <p>WITH THIS PRODUCT BUY...</p>
                        <Satellite item={item}/>
                    </div>
                </div>
            </div>
    );
};

export default Item;