import React, {Suspense} from 'react';
import Home from "./pages/Home";
import './scss/app.scss'
import {Route, Routes} from "react-router-dom";
import Loader from "./components/Loader";
import MainLayouts from "./Layouts/MainLayouts";


const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/'./pages/Cart'));
const Item = React.lazy(() => import(/* webpackChunkName: "Item"*/'./pages/Item'));
const Items = React.lazy(() => import(/* webpackChunkName: "Items"*/'./pages/Items'));
const Sets = React.lazy(() => import(/* webpackChunkName: "Sets"*/'./pages/Sets'));
const NotFound = React.lazy(() => import(/* webpackChunkName: "NotFound"*/'./pages/NotFound'));

function App() {
    return (
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

    );
}

export default App;
