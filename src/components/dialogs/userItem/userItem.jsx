import { NavLink } from 'react-router-dom';
import classes from './../dialogs.module.css';

const DialogsUserItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <li className={classes.dialogsUserItem}>
            <NavLink to={path} className={classes.dialogsUserLink}>{props.userName}</NavLink>
        </li>
    );
};

export default DialogsUserItem;