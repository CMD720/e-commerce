import React from 'react';
import styles from './SocialMediaBlock.module.scss'

const Index = () => {
    return (
        <div className={styles.socialMedia}>
            <table width="100%" align="center"  cellPadding="0" cellSpacing="7">
                <tbody>
                <tr>
                    <td >
                        <a target="_blank" rel="noreferrer" href="https://www.tiktok.com/@foxracing">
                            <img
                                src="https://www.foxracing.com/on/demandware.static/-/Library-Sites-FoxRacing/default/dw86c87faa/footer/social-icons/tiktok.svg"
                                alt="Facebook" width="26" height="26"/>
                        </a>
                    </td>
                    <td >
                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/foxRacing">
                            <img
                                src="https://d3k81ch9hvuctc.cloudfront.net/company/RXWpPx/images/9b234aff-aacc-44c3-8573-7caebf020cb6.jpeg"
                                alt="Facebook" width="35" height="35"/>
                        </a>
                    </td>
                    <td >
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/foxracing">
                            <img
                                src="https://d3k81ch9hvuctc.cloudfront.net/company/RXWpPx/images/907db965-8b29-4c82-a596-289ebd8dd2de.jpeg"
                                alt="Twitter" width="35" height="35"/>
                        </a>
                    </td>
                    <td >
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/foxracing">
                            <img
                                src="https://d3k81ch9hvuctc.cloudfront.net/company/RXWpPx/images/7da2c6d8-1b36-4754-8988-ca56bdfe1ee2.jpeg"
                                alt="Instagram" width="35" height="35"/>
                        </a>
                    </td>
                    <td >
                        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/foxracing">
                            <img
                                src="https://d3k81ch9hvuctc.cloudfront.net/company/RXWpPx/images/9926ec8b-18a5-4eb8-afc8-50cae7050ae8.jpeg"
                                alt="Youtube" width="35" height="35"/>
                        </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Index;

