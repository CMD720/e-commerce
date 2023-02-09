// https://cssloaders.github.io/

import React from 'react';
import styles from './Loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <div className={styles.ldsDefault}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    );
};

export default Loader;