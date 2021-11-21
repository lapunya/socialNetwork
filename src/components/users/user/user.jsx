import React from "react";
import classes from "./user.module.css"
import userPhoto from "../../../assets/images/user.png"
import { NavLink } from "react-router-dom";

const User = (props) => {

    return (
        <div className={classes.user}>
            <div className={classes.leftBox}>
                <NavLink to={'/profile/' + props.userId}>
                    <img className={classes.userPhoto} src={props.ava ? props.ava : userPhoto} alt="" />
                </NavLink>
                <button disabled={props.followingInProgress.some(id => props.userId === id)} id={props.userId} onClick={() => {props.followThunkCreator(props.userId);}}>
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