import React, {ChangeEvent, FC, FormEvent, useEffect, useRef, useState} from 'react';
import {TItem} from "../../redux/Item/types";
import {ItemCard} from "../index";
import {nanoid} from "nanoid";
import {setReset} from "../../redux/Filter/slice";
import Loader from "../Loader";
import {useAppDispatch, useAppSelector} from "../../redux/storeHooks";
import {addItem} from "../../redux/Cart/slice";
import {TCartItem} from "../../redux/Cart/types";
import SizeGuide from "../SizeGuide";
import Modal from "../Modal/Modal";
import {modalSelector} from "../../redux/Modal/selectors";
import {modalOnOff} from "../../redux/Modal/slice";
import CartItem from "../Cart/CartItem";


type SetProps = {
    items: TItem[],
}
const Set: FC<SetProps> = ({items}) => {

    const dispatch = useAppDispatch()
    const [sizesOfSet, setSizesOfSet] = useState<any[]>([])
    const [activeIndex, setActiveIndex] = useState(false)
    const setRef = useRef<HTMLInputElement>(null)



    const onClickAddSet = () => {
        setActiveIndex(!activeIndex)
    }

    const onClickSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement);
        items.map((item, index) => {
            const size = formData.get(`${item.category}`)
            if (size !== null) {
                setSizesOfSet(prevState => ([...prevState, size]))
            }
        })
        setActiveIndex(!activeIndex)
        // if (sizesOfSet.length !== 0) {
        //     items.map((item, index) => createItemCart(item, index))
        // }
    }
    const createItemCart = (item: TItem, index: number) => {
        // console.log('item', item);
        // const sizeOption = item.sizes.map(s => s)
        // const sizeInput = prompt(`Please enter size of ${item.title}`, sizeOption.join(' - '))

        // if (sizeInput !== null) {
        const Item: TCartItem = {
            uId: nanoid(),
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category,
            // size: sizeInput.toUpperCase(),
            size: (sizesOfSet[index]).toUpperCase(),
            image: item.imageUrl[0],
            itemCount: 0,
            itemDiscount: 0
        }
        dispatch(addItem(Item))
        setSizesOfSet([])
        // } else {
        //     alert(`Please, Select size`)
        // }
    }

    // const onChangeForm = (event:string) => {
    //     console.log('ONCHANGE',event);
    // }

    const itemsSet = items.map((item) => (
        <div key={nanoid()}>
            <img src={item.imageMiniUrl[0]}/>
            {
                item.sizes.map((size, index) => (
                    <b key={nanoid()} style={{marginRight: 20 , userSelect: "none"}}>
                        {/*<input onChange={(event)=> onChangeForm(event.target.value)} type="radio" name={item.category.toString()} value={size}/>*/}
                        <label style={{cursor: "pointer"}}>
                            <input style={{cursor: "pointer"}} type="radio" name={item.category.toString()} value={size}
                                   defaultChecked={index === 0}/>
                            {size}
                        </label>
                    </b>
                ))
            }
        </div>
    ))

    useEffect(()=>{
        if (sizesOfSet.length !== 0) {
            // console.log('useEffect')
            items.map((item, index) => createItemCart(item, index))
        }
    },[sizesOfSet])

    // console.log('sizesOfSet', sizesOfSet);
    //TODO remove inline style --- Set.Module.scss
    return (
        <div onClick={(e) => {
            // activeIndex ?setActiveIndex(false) : e.stopPropagation()
            if(activeIndex){
                setActiveIndex(false)
            }
        }}>
        {/*<div>*/}
            <div className="home-item">
                {
                    items.map((item, index) => <ItemCard {...item} key={nanoid()}/>)
                }
            </div>
            <div onClick={() => setActiveIndex(true)} className="button addSet">Add Set</div>
            <div className={activeIndex ? "set-size active-size" : "set-size"}>
                <div onClick={event => event.stopPropagation()} className="set-size__content">
                    <form onSubmit={onClickSubmit}>
                        {
                            itemsSet
                        }
                        <div style={{display: "flex", justifyContent:"space-between"}}>
                        <input className="button set" style={{marginTop: 20}} type="submit" value="Add to Cart"/>
                        <input className="button set" style={{marginTop: 20}} type="button" onClick={()=>setActiveIndex(false)} value="Cancel"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Set;