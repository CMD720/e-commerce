import React, {useState} from 'react';
import BannerTop from "../components/Banner/BannerTop";
import BannerHome from "../components/Banner/BannerHome";
import ItemCard from "../components/ItemCard";
import Modal2 from "../components/Modal/mod2/Modal2";
import NotFound from "../components/NotFoundBlock";
import Cart from "./Cart";
import Item from "./Item";
import {nanoid} from "nanoid";
import SizeGuide from "../components/SizeGuide";
import {modalOnOff} from "../redux/Modal/slice";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {modalSelector} from "../redux/Modal/selectors";
import CartItemQuickView from "../components/Cart/CartItemQuickView";
import Test_modal from "../components/Modal/mod2/test_modal";

const Home = () => {


    return (
        <div className="home">
            <div className='home-top'>
                <BannerTop/>
            </div>
            {/*отрисовка main-баннеров по условию что в адресе главная страница. или как-то так*/}
            <div className="container">
                {/*<BannerHome/>*/}
                {/*<NotFound/>*/}
                <div className="home-item">
                    {/*<ItemCard/>*/}
                    {/*<ItemCard/>*/}
                    {/*<ItemCard/>*/}
                </div>
            </div>
            {/*<Cart/>*/}
            <Item/>
        </div>
    );
};

export default Home;