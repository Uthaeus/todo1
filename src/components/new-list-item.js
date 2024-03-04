import { useState } from "react";

function NewListItem({ handleAddListItem, cancelAddingItem }) {
    const [title, setTitle] = useState("");

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleNewListItem();
        }
    };

    const handleNewListItem = () => {
        if (title === "") {
            cancelAddingItem();
            return;
        }

        handleAddListItem({
            title: title,
            id: Date.now(),
            isChecked: false
        });
    };

    return (
        <div className="new-list-item">
            <input className="new-list-item-input" value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={handleKeyPress} autoFocus={true} />
            <button className="new-list-item-btn" onClick={handleNewListItem}>add</button>
            <button className="new-list-item-btn" onClick={cancelAddingItem}>cancel</button>
        </div>
    );
}

export default NewListItem