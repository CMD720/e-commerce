import React, {FC, useEffect, useState} from 'react';
import {TItem} from "../../redux/Item/types";
import ItemCard from "../ItemCard";
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


type SetProps = {
    items: TItem[]
}
const Set: FC<SetProps> = ({items}) => {

    const dispatch = useAppDispatch()
    const {modal} = useAppSelector(modalSelector)
    const [itemSet, setItemSet] = useState<Element[]>()

    //TODO как добавить размер? || размер добавили, как сделать красиво? форма?
    const createItemCart = (item:TItem, index:number) => {
        const sizeOption = item.sizes.map(s => s)
        const sizeInput = prompt(`Please enter size of ${item.title}`, sizeOption.join(' - '))

        if(sizeInput !== null){
            const Item:TCartItem = {
                uId: nanoid(),
                id: item.id,
                title: item.title,
                price: item.price,
                category: item.category,
                size: sizeInput.toUpperCase(),
                image: item.imageUrl[0],
                itemCount: 0
            }
            dispatch(addItem(Item))
        } else {
            alert(`Please, Select size`)
        }
    }
    const onClickAddSet = () => {
        // setItemSet(items.map((item) => (<img src={item.imageMiniUrl[0]}/>)))
        // dispatch(modalOnOff('modal'))
        items.map((item, index) => createItemCart(item , index))
    }

    const itemsSet = items.map((item) => (<img src={item.imageMiniUrl[0]}/>))

    return (
        <div>
            {/*<div className="container">*/}
                <div className="home-item">
                    {
                        items.map((item) => <ItemCard {...item} key={nanoid()}/>)
                    }
                </div>
            {/*</div>*/}

            <div onClick={() => onClickAddSet()} className="button">Add Set</div>
            {/*///////////////*/}
            <Modal show={modal}>
                <div className="set-size">
                    {
                        itemsSet
                        // items.map((item) => (<img src={item.imageMiniUrl[0]}/>))
                    }
                </div>
            </Modal>
            {/*/////////////////*/}
        </div>
    );
};

export default Set;