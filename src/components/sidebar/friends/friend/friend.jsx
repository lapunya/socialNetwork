import classes from './friend.module.css';

const Friend = (props) => {
    return (
        <li className={classes.friend}>
            <img src={props.friendAvatar} className={classes.friendAvatar} width="30" height="30" alt="" />
            <span className={classes.friendName}>{props.friendName}</span>
        </li>
    );
};

export default Friend;