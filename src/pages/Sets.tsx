import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Loader, Set} from "../components";
import {nanoid} from "nanoid";
import axios from "axios";

const Sets = () => {

    const navigate = useNavigate()
    const [items, setItems] = useState<any[]>([])

    const [isLoading, setIsLoading] = useState(true)
    const colortypes = ["red", "black", "white"]

    const getSet = () => {
        colortypes.map(async (color, index) => {
            const {data} = await axios.get(`https://63d036bce52f587829ae3131.mockapi.io/items?&color=${index}`)
            setItems(prevState => ([...prevState, data]))
            setIsLoading(false)
        })

    }

    useEffect(() => {
        setIsLoading(true)
        getSet()
    }, [])

    const products = items.map((item, index) => <Set items={item} key={nanoid()}/>)

    return (
        <div>
            <div className="container">
                {
                    isLoading
                        ? <Loader/>
                        : products
                }
                {
                    isLoading
                        ? <></>
                        : <div className="button" onClick={() => navigate(-1)}>Back</div>
                }
            </div>
        </div>
    );
};

export default Sets;