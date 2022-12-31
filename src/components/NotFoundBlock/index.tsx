import React from 'react';
import styles from './NotFound.module.scss'
import {Link} from "react-router-dom";
import Satellite from "../Satellite/Satellite";

const Index = () => {
    return (
        <div className={styles.root}>
            <div className={styles.top}>
                <h2>
                    WE CANNOT FIND THE PAGE YOU ARE LOOKING FOR!
                </h2>
                <Link to="/">
                    <div className="button">Continue shopping</div>
                </Link>
            </div>
            <div className={styles.bottom}>404</div>
            <div className={styles.satellite}>
                {/*<Satellite/>*/}
            </div>
        </div>
    );
};

export default Index;