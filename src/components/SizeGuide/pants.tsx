import React from 'react';
import styles from "./SizeGuide.module.scss"

const Pants = () => {

    return (
        <div>
            <div className="metric-tabs-container">
                <h4 className="mb-5">Pants Size Guide</h4>
                <div className={styles.tab_content}>
                        <table className={styles.size}>
                            <thead>
                            <tr>
                                <th id="size" scope="col">Size</th>
                                <th scope="col">Waist (IN)</th>
                                <th scope="col">Insteam (IN)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td data-label="S">28</td>
                                <td data-label="21.7 - 22in" scope="row">28 - 30"</td>
                                <td data-label="55-56" scope="row">27"</td>
                            </tr>
                            <tr>
                                <td data-label="M">30</td>
                                <td data-label="22 - 22.8in" scope="row">31 - 32"</td>
                                <td data-label="57-58" scope="row">29"</td>
                            </tr>
                            <tr>
                                <td data-label="L">32</td>
                                <td data-label="23 - 23.6in" scope="row">33 - 34"</td>
                                <td data-label="59-60" scope="row">30"</td>
                            </tr>
                            <tr>
                                <td data-label="XL">34</td>
                                <td data-label="24 - 24.4in" scope="row">35 - 36"</td>
                                <td data-label="61-62" scope="row">31"</td>
                            </tr>
                            </tbody>
                        </table>
                </div>
            </div>
        </div>
    );
};

export default Pants;