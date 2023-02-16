import React, {Suspense} from 'react';
import Home from "./pages/Home";
import './scss/app.scss'
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Loader from "./components/Loader";
// import Sets from "./pages/Sets";
// import Items from "./pages/Items";
// import Item from "./pages/Item";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/'./pages/Cart'));
const Item = React.lazy(() => import(/* webpackChunkName: "FullPizza"*/'./pages/Item'));
const Items = React.lazy(() => import(/* webpackChunkName: "FullPizza"*/'./pages/Items'));
const Sets = React.lazy(() => import(/* webpackChunkName: "FullPizza"*/'./pages/Sets'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/'./pages/NotFound'));

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                {/*<Route index element={<Home/>}/>*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={
                    <Suspense fallback={<Loader/>}>
                        <Cart/>
                    </Suspense>
                }/>
                <Route path="/items" element={
                    <Suspense fallback={<Loader/>}>
                        <Items/>
                    </Suspense>
                }/>
                <Route path="/item/:id" element={
                    <Suspense fallback={<Loader/>}>
                        <Item/>
                    </Suspense>
                }/>
                <Route path="/set" element={
                    <Suspense fallback={<Loader/>}>
                        <Sets/>
                    </Suspense>
                }/>
                <Route path="*" element={
                    <Suspense fallback={<Loader/>}>
                        <NotFound/>
                    </Suspense>
                }/>
            </Routes>
        </div>
    );
}

export default App;
