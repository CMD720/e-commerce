import React, {useState} from 'react';
import styles from './Banners.module.scss'

const Banner = () => {

    const bannerText = ['Free Standard Shipping on Orders $109+','From 3 units - 5% discount', 'A gift for the first order', 'SALE on models 2022']
    const [indexText, setIndexText] = useState(0)

    const changeIndex = (index: number) => {
        index === bannerText.length - 1 ? index = 0 : index++
        // console.log('index', index)
        setIndexText(index)
    }
    setTimeout(changeIndex, 20000, indexText)

    return (
        <div className={styles.banner}>
            <div className={styles.text}>
                {bannerText[indexText]}
            </div>
        </div>
    );
};

export default Banner;