import React from 'react';
import ItemCard from "../ItemCard";
import styles from "./Stelite.module.scss"

const Satellite = () => {

    return (
        <div className={styles.satellite__wrapper}>
            {/*pass the complete item to the component. Select a set that matches the color*/}
            <div className={styles.item}>
                {/*<ItemCard/>*/}
            </div>
            {/*<ItemCard/>*/}
            {/*<ItemCard/>*/}
            {/*<ItemCard/>*/}
            {/*<ItemCard/>*/}
        </div>
    );
};

export default Satellite;