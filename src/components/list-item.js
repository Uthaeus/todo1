import { useState } from 'react';

import classes from './list-item.module.scss';

function ListItem({ item, deleteListItem, handleCheckboxChange, handleTitleChange }) {
    const [changingTitle, setChangingTitle] = useState(false);

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleChangingTitle();
        }
    };

    const handleChangingTitle = () => {
        setChangingTitle(!changingTitle);
    }

    return (
        <div className={classes.listItem}>
            <div className={classes.listItemCheckboxWrapper}>
                <p className={classes.listItemCheckbox} onClick={() => handleCheckboxChange(item.id)}>{item.isChecked ? "✓" : ""}</p>
            </div>

            {changingTitle ? <input className={`${classes.listItemTitle} ${classes.listItemTitleInput}`} value={item.title} onChange={(e) => handleTitleChange(item.id, e.target.value)} onBlur={handleChangingTitle} onKeyDown={handleKeyPress} autoFocus /> : <p className={classes.listItemTitle} onClick={handleChangingTitle}>{item.title}</p>}

            <div className={classes.listItemDeleteWrapper}>
                <p className={classes.listItemDelete} onClick={() => deleteListItem(item.id)}>X</p>
            </div>
        </div>
    );
}

export default ListItem