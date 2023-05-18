import React, { useState } from 'react';



const TabMaker = (props) => {
    const [label, setLabel] = useState("");
    const [content, setContent] = useState("");

    const tabAdder = (e) => {
        e.preventDefault();
        props.addTab({ label, content });
        setLabel("");
        setContent("");
    }

    return (
        <div>
            <form onSubmit={tabAdder}>
                <label htmlFor="tabName">Tab Name: </label>
                <input type="text" name="tabName" onChange={(e) => setLabel(e.target.value)} value={label} />
                <label htmlFor="tabContent">Tab Content: </label>
                <input type="text" name="tabContent" onChange={(e) => setContent(e.target.value)} value={content} />
                <input type="submit" value="Add Tab" />
            </form>
        </div>
    )
}
export default TabMaker;