import React from 'react';
import styles from "./SizeGuide.module.scss"

const Jersey = () => {

    return (
        <div>
            <div className="metric-tabs-container">
                <h4 className="mb-5">Jersey Size Guide</h4>
                <div className={styles.tab_content}>
                        <table className={styles.size}>
                            <thead>
                            <tr>
                                <th id="size" scope="col">Size</th>
                                <th scope="col">Sleve (IN)</th>
                                <th scope="col">Chest (IN)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td data-label="S" scope="row"> S</td>
                                <td data-label="31 - 32in" scope="row">31 - 32"</td>
                                <td data-label="34 - 35" scope="row">34 - 35"</td>
                            </tr>
                            <tr>
                                <td data-label="M"> M</td>
                                <td data-label="32 - 33in" scope="row">32 - 33"</td>
                                <td data-label="51-52" scope="row">36 - 38"</td>
                            </tr>
                            <tr>
                                <td data-label="L">L</td>
                                <td data-label="33 - 34in" scope="row">33 - 34"</td>
                                <td data-label="52-53" scope="row">40 - 42"</td>
                            </tr>
                            <tr>
                                <td data-label="XL">XL</td>
                                <td data-label="34 - 35in" scope="row">34 - 35"</td>
                                <td data-label="53-54" scope="row">44 - 46"</td>
                            </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    );
};

export default Jersey;