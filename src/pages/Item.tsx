import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {modalOnOff} from "../redux/Modal/slice";
import Modal from "../components/Modal/Modal";
import SizeGuide from "../components/SizeGuide";
import {nanoid} from "nanoid";
import {modalSelector} from "../redux/Modal/selectors";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";
import {filterSelector} from "../redux/Filter/selectors";
import {resetColor, setColor} from "../redux/Filter/slice";

// type ItemProps = {
type ItemType = {
    //TODO не все нужны (или так оставить?)
    id: string;
    category: number;
    imageUrl: string[];
    imageMiniUrl: string[];
    title: string;
    sizes: string[];
    price: number;
    color: number;
    colortypes: string[];
}

// const Item: FC<ItemProps> = ({imageUrl, imageMiniUrl, title, sizes, price, color, colortypes}) => {
const Item: FC = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [item, setItem] = useState<ItemType>({
        id: '',
        category: 0,
        imageUrl: [],
        imageMiniUrl: [],
        title: '',
        sizes: [],
        price: 0,
        color: 0,
        colortypes: [],
    })
    // const {imageUrl, imageMiniUrl, title, sizes, price, color, colortypes} = item.




    const dispatch = useAppDispatch()
    const {modal} = useAppSelector(modalSelector)
    const {categoryId, searchValue, color} = useAppSelector(filterSelector)

    const [isLoading, setIsLoading] = useState(true)
    const [url, setUrl] = useState(item.imageUrl[0])
    const [activeImg, setActiveImg] = useState(0)
    const [activeSize, setActiveSize] = useState(item.sizes.length)
    const [category, setCategory] = useState(-1)

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

    //Эмитируем запрос поиска-выборки по цвету - Emulate a color search-select query
    const changeColor = (data:ItemType[]) => {
        const result = data.find(item => item.color === color)
        if(result) {
            setItem(result)
            setUrl(result.imageUrl[0])
        }else {
            alert('Change color failure')
            navigate(-1)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        async function fetchItem() {
            setIsLoading(true)
            try {
                if(color >= 0 ) {
                    // const setcolor = `&color=${color}`
                    // const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items/${id}?${setcolor}`)
                    const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items?category=${category}`)
                    changeColor(data)
                    // setItem(data)
                    // setUrl(data.imageUrl[0])
                    // setActiveSize(data.sizes.length)
                    // setCategory(data.category)
                    // setIsLoading(false)

                }else{
                    const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items/${id}`)
                    setItem(data)
                    setUrl(data.imageUrl[0])
                    setActiveSize(data.sizes.length)
                    setCategory(data.category)
                    setIsLoading(false)
                }
            } catch (error) {
                alert('EFI - (error fetch item)')
                navigate('/')
            }
        }
        fetchItem()
    }, [color])

    if (!item) {
        return <Loader/>
    }
    return (
        isLoading ? <Loader/>
            : <div className="item__container">
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
                    <div>Size - <b>{activeSize === item.sizes.length ? 'select size' : item.sizes[activeSize]}</b></div>
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
                    <div className="item__guide" onClick={() => dispatch(modalOnOff('modal'))}>size guide</div>
                    <div className="button">Add to Card</div>
                    <br/>
                    <div onClick={()=> onClickBack()} className="button">Back</div>
                </div>
                <Modal show={modal}>
                    <SizeGuide/>
                </Modal>
            </div>
    );
};

export default Item;