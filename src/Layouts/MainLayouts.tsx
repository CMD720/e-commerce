import React from 'react';
import {Header, BannerTop, Footer} from "../components";
import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div className="wrapper">
            <Header/>
            <BannerTop/>
            <div className="content-main">
                <Outlet/>
            </div>
                <Footer/>
        </div>
    );
};

export default MainLayouts;