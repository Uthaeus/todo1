import { useState } from 'react';

import classes from './list-item.module.scss';

function ListItem({ item }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={classes.listItem}>
            <div className={classes.listItemCheckboxWrapper}>
                <p className={classes.listItemCheckbox} onClick={handleCheckboxChange}>{isChecked ? "✓" : " "}</p>
            </div>

            <p className={classes.listItemTitle}>{item}</p>

            <div className={classes.listItemDeleteWrapper}>
                <p className={classes.listItemDelete}>X</p>
            </div>
        </div>
    );
}

export default ListItem