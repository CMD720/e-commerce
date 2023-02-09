import React from 'react';
import styles from './Banners.module.scss'
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../redux/storeHooks";
import {setCategoryId} from "../../redux/Filter/slice";

const BannerHome = () => {

    const dispatch = useAppDispatch()

    return (
        <div className={styles.homeWrapper}>
            <div className={styles.homeBanner}>
                <div className={styles.button_wrapper}>
                    <Link to={'/item'}>
                        <div className="button">
                            show Set
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.pad1}>
                <div className={styles.button_wrapper}>
                    <Link to={'/items'} onClick={()=> dispatch(setCategoryId(2))}>
                        <div className="button">
                            Helmets
                        </div>
                    </Link>
                </div>

            </div>
            <div className={styles.pad2}>
                <div className={styles.button_wrapper}>
                    <Link to={'/items'} onClick={()=> dispatch(setCategoryId(6))}>
                        <div className="button">
                            Boots
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.pad3}>
                <div className={styles.button_wrapper}>
                    <Link to={'/items'} onClick={()=> dispatch(setCategoryId(4))}>
                        <div className="button">
                            Jersey
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;