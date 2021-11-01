import React from "react";
import classes from "./user.module.css"
import userPhoto from "../../../assets/images/user.png"

const User = (props) => {

    let switchFollow = (el) => {
        let userId = el.target.id;
        props.switchFollow(userId);
    }

    return (
        <div className={classes.user}>
            <div className={classes.leftBox}>
                <img className={classes.userPhoto} src={props.ava ? props.ava : userPhoto} alt="" />
                <button id={props.userId} onClick={switchFollow}>
                    {props.followed ? 'Unfollow' : 'Follow'}
                </button>
            </div>
            <div className={classes.mainBox}>
                <div className={classes.mainInfo}>
                    <span>{props.userName}</span>
                    <span>{props.status}</span>
                </div>
                <div className={classes.location}>
                    <span>Country</span>
                    <span>City</span>
                </div>
            </div>

        </div>
    )
}

export default User;