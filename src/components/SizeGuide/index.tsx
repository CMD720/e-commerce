import React from 'react';
import styles from "./SizeGuide.module.scss"

const Index = () => {
    return (
        <div>
            <div className="metric-tabs-container">
                <h4 className="mb-5">Size Guide</h4>
                <div className={styles.tab_content}>
                    {/*<div aria-labelledby="sc-v1-in-tab" className="tab-pane fade active show" id="sc-v1-in" role="tabpanel">*/}
                        <table className={styles.size}>
                            <thead>
                            <tr>
                                <th id="size" scope="col">Size</th>
                                <th scope="col">Head Size Range (IN)</th>
                                <th scope="col">Head Size Range (CM)</th>
                                <th scope="col">Helmet Weight (G)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td data-label="Youth S" scope="row">Youth S</td>
                                <td data-label="19.3 - 20in" scope="row">19.3 - 20"</td>
                                <td data-label="49-51" scope="row">49 - 51cm</td>
                                <td data-label="1080±50" scope="row">1080±50</td>
                            </tr>
                            <tr>
                                <td data-label="Youth M">Youth M</td>
                                <td data-label="20 - 20.5in" scope="row">20 - 20.5"</td>
                                <td data-label="51-52" scope="row">51 - 52cm</td>
                                <td data-label="1080±50" scope="row">1080±50</td>
                            </tr>
                            <tr>
                                <td data-label="Youth L">Youth L</td>
                                <td data-label="20.5 - 21in" scope="row">20.5 - 21"</td>
                                <td data-label="52-53" scope="row">52 - 53cm</td>
                                <td data-label="1080±50" scope="row">1080±50</td>
                            </tr>
                            <tr>
                                <td data-label="X-Small">X-Small</td>
                                <td data-label="21 - 21.3in" scope="row">21 - 21.3"</td>
                                <td data-label="53-54" scope="row">53 - 54cm</td>
                                <td data-label="1080±50" scope="row">1080±50</td>
                            </tr>
                            <tr>
                                <td data-label="Small">Small</td>
                                <td data-label="21.7 - 22in" scope="row">21.7 - 22"</td>
                                <td data-label="55-56" scope="row">55 - 56cm</td>
                                <td data-label="1180±50" scope="row">1180±50</td>
                            </tr>
                            <tr>
                                <td data-label="Medium">Medium</td>
                                <td data-label="22 - 22.8in" scope="row">22 - 22.8"</td>
                                <td data-label="57-58" scope="row">57 - 58cm</td>
                                <td data-label="1240±50" scope="row">1240±50</td>
                            </tr>
                            <tr>
                                <td data-label="Large">Large</td>
                                <td data-label="23 - 23.6in" scope="row">23 - 23.6"</td>
                                <td data-label="59-60" scope="row">59 - 60cm</td>
                                <td data-label="1340±50" scope="row">1340±50</td>
                            </tr>
                            <tr>
                                <td data-label="X-Large">X-Large</td>
                                <td data-label="24 - 24.4in" scope="row">24 - 24.4"</td>
                                <td data-label="61-62" scope="row">61 - 62cm</td>
                                <td data-label="1440±50" scope="row">1440±50</td>
                            </tr>
                            <tr>
                                <td data-label="XXL">XXL</td>
                                <td data-label="24.8 - 25.2in" scope="row">24.8 - 25.2"</td>
                                <td data-label="63-64" scope="row">63 - 64cm</td>
                                <td data-label="1440±50" scope="row">1440±50</td>
                            </tr>
                            </tbody>
                        </table>
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Index;