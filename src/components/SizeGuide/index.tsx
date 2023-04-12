import React from 'react';
import Boots from "./boots";
import Helmets from "./helmet";
import Pants from "./pants";
import Jersey from "./jersey";

const Index = ({category}: any) => {

    const sizeGuide = ['', '', <Helmets/>, '', <Jersey/>, <Pants/>, <Boots/>]

    return (
        <div>
            {sizeGuide[category]}
        </div>
    );
};

export default Index;