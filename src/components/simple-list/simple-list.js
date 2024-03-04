import { useState } from "react";

import ListItem from "../list-item";

function SimpleList() {

    const sampleList = [
        "Item 1",
        "Item 2",
        "Item 3"
    ]

    const [listItems, setListItems] = useState(sampleList);

    return (
        <div className="list">
            <div className="list-header">
                <h1 className="list-title">Simple List</h1>
                <button>Add</button>
            </div>

            <div className="list-content">
                {listItems.map((item, index) => <ListItem key={index} item={item} />)}
            </div>
        </div>
    );
}

export default SimpleList