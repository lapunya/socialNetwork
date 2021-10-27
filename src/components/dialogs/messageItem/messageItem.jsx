import React from 'react';
import classes from './../dialogs.module.css';

const DialogsMessageItem = (props) => {
    return (
        <li className={classes.dialogsMessageItem}>{props.message}</li>
    );
};

export default DialogsMessageItem;