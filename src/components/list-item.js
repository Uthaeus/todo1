import { useState } from 'react';

import classes from './list-item.module.scss';

function ListItem({ item }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={classes.listItem}>
            <p>check</p>
            <p className={classes.listItemTitle}>{item}</p>
            <p className={classes.listItemDelete}>X</p>
        </div>
    );
}

export default ListItem