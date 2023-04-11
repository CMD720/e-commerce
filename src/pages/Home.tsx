import React from 'react';
import BannerTop from "../components/Banner/BannerTop";
import {BannerHome} from "../components";

const Home = () => {


    return (
        <div className="home">
            {/*<div className='home-top'>*/}
            {/*    <BannerTop/>*/}
            {/*</div>*/}
            <div className="container">
                <BannerHome/>
                <div className="home-item">
                    {/*{*/}
                    {/*    isLoading*/}
                    {/*        ? <Loader/>*/}
                    {/*        : products*/}
                    {/*}*/}
                </div>
            </div>
        </div>
    );
};

export default Home;