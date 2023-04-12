import React, {FC, useEffect, useState} from 'react';
import {ItemCard} from "../index";
import styles from "./Stelite.module.scss"
import axios from "axios";
import {TItem} from "../../redux/Item/types";
import {nanoid} from "nanoid";


type SatelliteProps = {
    item: TItem,
    type?: string,
}
const Satellite: FC<SatelliteProps> = ({item, type}) => {

    const [items, setItems] = useState<TItem[]>([])

    const getSet = async () => {
        const color = item.color
        const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items?&color=${color}`)
        setItems(data.filter((dat: TItem) => dat.category !== item.category))
    }
    useEffect(() => {
        getSet()
    }, [])

    return (
        <div className={styles.satellite__wrapper}>
            {
                items.map((it: TItem) => <ItemCard {...it} key={nanoid()}/>)
            }
        </div>
    );
};

export default Satellite;