import React, { useState } from 'react';


const Tab = (props) => {

    const tabArray = props.tabs;

    const tabBlock = {
        display: "inline-block",
        border: "1px solid black",
        width: "100px",
        height: "20px",
        backgroundColor: "lightgrey",
    }

    const selectedTab = {
        display: "inline-block",
        border: "1px solid black",
        width: "100px",
        height: "20px",
        backgroundColor: "yellow",
    }

    const [selected, setSelected] = useState(null);

    const onClickHandler = (e, value) => {
        props.tabContent(value.content);
        setSelected(value);
    }



    return (
        <div>
            {tabArray.map((tab, index) => (
                <div key={index} onClick={(e) => onClickHandler(e, tab )} style = {selected === tab ? selectedTab : tabBlock}
                className={`${selected ===tab ? 'fade-in' : ''}`}>
                    {tab.label}
                </div>

            ))}
        </div>
    );
}

export default Tab;