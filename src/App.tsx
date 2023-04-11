import React, {Suspense} from 'react';
import Home from "./pages/Home";
import './scss/app.scss'
import Header from "./components/Header";
import {Outlet, Route, Routes} from "react-router-dom";
import Loader from "./components/Loader";
import BannerTop from "./components/Banner/BannerTop";
import Footer from "./components/Footer";
import MainLayouts from "./Layouts/MainLayouts";


const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/'./pages/Cart'));
const Item = React.lazy(() => import(/* webpackChunkName: "Item"*/'./pages/Item'));
const Items = React.lazy(() => import(/* webpackChunkName: "Items"*/'./pages/Items'));
const Sets = React.lazy(() => import(/* webpackChunkName: "Sets"*/'./pages/Sets'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/'./pages/NotFound'));

function App() {
    return (
        // <div className="wrapper">
        //     <Header/>
        //     <BannerTop/>
        //     <div className="content-main">

        //         <Routes>
        //             <Route path="/" element={<MainLayouts/>}>
        //                 {/*<Route index element={<Home/>}/>*/}
        //                 <Route path="/" element={<Home/>}/>
        //                 <Route path="/cart" element={
        //                     <Suspense fallback={<Loader/>}>
        //                         <Cart/>
        //                     </Suspense>
        //                 }/>
        //                 <Route path="/items" element={
        //                     <Suspense fallback={<Loader/>}>
        //                         <Items/>
        //                     </Suspense>
        //                 }/>
        //                 <Route path="/item/:id" element={
        //                     <Suspense fallback={<Loader/>}>
        //                         <Item/>
        //                     </Suspense>
        //                 }/>
        //                 <Route path="/set" element={
        //                     <Suspense fallback={<Loader/>}>
        //                         <Sets/>
        //                     </Suspense>
        //                 }/>
        //                 <Route path="*" element={
        //                     <Suspense fallback={<Loader/>}>
        //                         <NotFound/>
        //                     </Suspense>
        //                 }/>
        //             </Route>
        //         </Routes>

            <Suspense fallback={<Loader/>}>
        <Routes>
            <Route path="/" element={<MainLayouts/>}>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/items" element={<Items/>}/>
                <Route path="/item/:id" element={<Item/>}/>
                <Route path="/set" element={<Sets/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
        </Suspense>

        //     </div>
        //     <Footer/>
        // </div>
    );
}

export default App;
