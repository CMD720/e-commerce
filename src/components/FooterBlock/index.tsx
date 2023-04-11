import React from 'react';
import styles from "./FooterBlock.module.scss"
import {SocialMediaBlock} from "../index";

const Index = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.wrapper}>
                <img className={styles.footer_logo}
                     src="https://www.foxracing.com/on/demandware.static/Sites-FoxUS-Site/-/default/dw33d892bf/images/logo-light.svg"
                     alt="Fox Racing"/>
                <SocialMediaBlock/>
            </div>
        </div>
    );
};

export default Index;