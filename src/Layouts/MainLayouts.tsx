import React from 'react';
// import Header from "../components/Header";
import {Header, BannerTop, Footer} from "../components";
// import BannerTop from "../components/Banner/BannerTop";
// import Footer from "../components/Footer";
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