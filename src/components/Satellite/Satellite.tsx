import React, {FC, useEffect, useState} from 'react';
import {ItemCard} from "../index";
import styles from "./Stelite.module.scss"
import axios from "axios";
import {TItem} from "../../redux/Item/types";
import {nanoid} from "nanoid";
import Loader from "../Loader";


type SatelliteProps = {
    item: TItem,
    type?: string,
}
//TODO разобораться как сделать какоето значание по умолчанию у type вместо undefined
const Satellite: FC<SatelliteProps> = ({item, type}) => {

    const [items, setItems] = useState<TItem[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [satellitElement, setSatellitElement] = useState<JSX.Element[]>()

    const getSet = async () => {
        const color = item.color
        const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items?&color=${color}`)
        // const d = data.filter((dat: TItem) => dat.category !== item.category)
        // console.log('filter',d);
        // setSatellitElement(items.map((it: TItem) => <ItemCard {...it} key={nanoid()}/>))
        setItems(data.filter((dat: TItem) => dat.category !== item.category))
        // console.log('data', data);
        // setIsLoading(false)
    }
    useEffect(() => {
        // setIsLoading(true)
        getSet()
    }, [])

    // console.log('satellit', items);
    // console.log('satellitEELMENT', satellitElement);

    return (
        <div className={styles.satellite__wrapper}>
            {
                items.map((it: TItem) => <ItemCard {...it} key={nanoid()}/>)
            }
        </div>
    );
};

export default Satellite;