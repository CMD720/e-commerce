import React from 'react';
import BannerTop from "../components/Banner/BannerTop";
import BannerHome from "../components/Banner/BannerHome";

const Home = () => {


    return (
        <div className="home">
            <div className='home-top'>
                <BannerTop/>
            </div>
            <div className="container">
                <BannerHome/>
                <div className="home-item">

                    {/*TODO-вывести-рандом-типа-best-sales*/}
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