import React, {FC, useState} from 'react';


type TooltipsProps = {
    title?: string | JSX.Element,
    children?: JSX.Element | JSX.Element[]
}
const Tooltip:FC<TooltipsProps> =
    ({
        title,
        children,
     }) => {

    const [tooltips, setTooltips] = useState(false)

    return (
        <div className="question__wrapper"
             onMouseEnter={() => setTooltips(true)}
             onMouseLeave={() => setTooltips(false)}
        >
            {children}
            <div className={tooltips ? "tooltips__on" : "tooltips"}>
                {title}
            </div>
        </div>
    );
};

export default Tooltip;