import { useState } from "react";

import ListItem from "../list-item";
import NewListItem from "../new-list-item";

const sampleList = [
    {
        title: "Sample Title 1",
        id: 1,
        isChecked: false
    },
    {
        title: "Sample Title 2",
        id: 2,
        isChecked: true
    },
    {
        title: "Sample Title 3",
        id: 3,
        isChecked: false
    }
]

function SimpleList() {

    const [listItems, setListItems] = useState(sampleList);
    const [addingItem, setAddingItem] = useState(false);

    const deleteListItem = (id) => {
        setListItems(listItems.filter(listItem => listItem.id !== id));
    };

    const handleCheckboxChange = (id) => {
        setListItems(listItems.map(listItem => listItem.id === id ? { ...listItem, isChecked: !listItem.isChecked } : listItem));
    };

    const handleTitleChange = (id, title) => {
        setListItems(listItems.map(listItem => listItem.id === id ? { ...listItem, title: title } : listItem));
    };

    const handleAddListItem = (item) => {
        setAddingItem(!addingItem);
        setListItems([...listItems, item]);
    };

    return (
        <div className="list">
            <div className="list-header">
                <h1 className="list-title">Simple List</h1>
                <p className="list-item-add-btn" onClick={() => setAddingItem(true)}>+</p>
            </div>

            <div className="list-content">
                {addingItem && <NewListItem handleAddListItem={handleAddListItem} cancelAddingItem={() => setAddingItem(false)} />}
                {listItems.map((item) => <ListItem key={item.id} item={item} deleteListItem={deleteListItem} handleCheckboxChange={handleCheckboxChange} handleTitleChange={handleTitleChange} />)}
            </div>
        </div>
    );
}

export default SimpleList