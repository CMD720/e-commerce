import React from 'react';
import styles from './Banners.module.scss'
import {Link} from "react-router-dom";

const BannerHome = () => {
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
                    <Link to={'/item'}>
                        <div className="button">
                            to Begin
                        </div>
                    </Link>
                </div>

            </div>
            <div className={styles.pad2}>
                <div className={styles.button_wrapper}>
                    <Link to={'/item'}>
                        <div className="button">
                            to middle
                        </div>
                    </Link>
                </div>
            </div>
            <div className={styles.pad3}>
                <div className={styles.button_wrapper}>
                    <Link to={'/item'}>
                        <div className="button">
                            to end
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerHome;