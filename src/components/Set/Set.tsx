import React, {FC, useEffect, useState} from 'react';
import {TItem} from "../../redux/Item/types";
import {ItemCard} from "../index";
import {nanoid} from "nanoid";
import {useAppDispatch} from "../../redux/storeHooks";
import {addItem} from "../../redux/Cart/slice";
import {TCartItem} from "../../redux/Cart/types";


type SetProps = {
    items: TItem[],
}
const Set: FC<SetProps> = ({items}) => {

    const dispatch = useAppDispatch()
    const [sizesOfSet, setSizesOfSet] = useState<any[]>([])
    const [activeIndex, setActiveIndex] = useState(false)

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
    }
    const createItemCart = (item: TItem, index: number) => {
        const Item: TCartItem = {
            uId: nanoid(),
            id: item.id,
            title: item.title,
            price: item.price,
            category: item.category,
            size: (sizesOfSet[index]).toUpperCase(),
            image: item.imageUrl[0],
            itemCount: 0,
            itemDiscount: 0
        }
        dispatch(addItem(Item))
        setSizesOfSet([])
    }

    const itemsSet = items.map((item) => (
        <div key={nanoid()}>
            <img src={item.imageMiniUrl[0]}/>
            {
                item.sizes.map((size, index) => (
                    <b key={nanoid()} style={{marginRight: 20, userSelect: "none"}}>
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

    useEffect(() => {
        if (sizesOfSet.length !== 0) {
            items.map((item, index) => createItemCart(item, index))
        }
    }, [sizesOfSet])

    return (
        <div onClick={(e) => {
            if (activeIndex) {
                setActiveIndex(false)
            }
        }}>
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
                        <div style={{display: "flex", justifyContent: "space-between"}}>
                            <input className="button set" style={{marginTop: 20}} type="submit" value="Add to Cart"/>
                            <input className="button set" style={{marginTop: 20}} type="button"
                                   onClick={() => setActiveIndex(false)} value="Cancel"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Set;