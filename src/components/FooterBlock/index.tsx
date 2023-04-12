import React from 'react';
import styles from "./FooterBlock.module.scss"
import {SocialMediaBlock} from "../index";
import {setReset} from "../../redux/Filter/slice";
import {useAppDispatch} from "../../redux/storeHooks";
import {Link} from "react-router-dom";

const Index = () => {
    const dispatch = useAppDispatch()
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <Link to="/" onClick={() => dispatch(setReset())}>
                    <img className={styles.footer_logo}
                         src="https://www.foxracing.com/on/demandware.static/Sites-FoxUS-Site/-/default/dw33d892bf/images/logo-light.svg"
                         alt="Fox Racing"/>
                </Link>

                <SocialMediaBlock/>
            </div>
        </div>
    );
};

export default Index;