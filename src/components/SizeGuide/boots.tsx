import React from 'react';
import styles from "./SizeGuide.module.scss"

const Boots = () => {
    return (
        <div>
            <div className="metric-tabs-container">
                <h4 className="mb-5">Boots Size Guide</h4>
                <div className={styles.tab_content}>
                    <table className={styles.size}>
                        <thead>
                        <tr>
                            <th id="size" scope="col">Size (US)</th>
                            <th scope="col">US (Womens)</th>
                            <th scope="col">EU Size</th>
                            <th scope="col">UK Size</th>
                            <th scope="col">Japan / CM Size</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td data-label="9" scope="row">9</td>
                            <td data-label="10.5">10.5</td>
                            <td data-label="42.5">42.5</td>
                            <td data-label="8">8</td>
                            <td data-label="26">26</td>
                        </tr>
                        <tr>
                            <td data-label="9.5" scope="row">9.5</td>
                            <td data-label="11">11</td>
                            <td data-label="43">43</td>
                            <td data-label="8.5">8.5</td>
                            <td data-label="26.5">26.5</td>
                        </tr>
                        <tr>
                            <td data-label="10" scope="row">10</td>
                            <td data-label="11.5">11.5</td>
                            <td data-label="44">44</td>
                            <td data-label="9">9</td>
                            <td data-label="26.8">26.8</td>
                        </tr>
                        <tr>
                            <td data-label="10.5" scope="row">10.5</td>
                            <td data-label="12">12</td>
                            <td data-label="44.5">44.5</td>
                            <td data-label="9.5">9.5</td>
                            <td data-label="27.3">27.3</td>
                        </tr>
                        <tr>
                            <td data-label="11" scope="row">11</td>
                            <td data-label="12.5">12.5</td>
                            <td data-label="45">45</td>
                            <td data-label="10">10</td>
                            <td data-label="27.8">27.8</td>
                        </tr>
                        <tr>
                            <td data-label="11.5" scope="row">11.5</td>
                            <td data-label="13">13</td>
                            <td data-label="46">46</td>
                            <td data-label="10.5">10.5</td>
                            <td data-label="28.3">28.3</td>
                        </tr>
                        <tr>
                            <td data-label="12" scope="row">12</td>
                            <td data-label="13.5">13.5</td>
                            <td data-label="46.5">46.5</td>
                            <td data-label="11">11</td>
                            <td data-label="28.6">28.6</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Boots;