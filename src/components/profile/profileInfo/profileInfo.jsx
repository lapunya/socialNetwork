import React from 'react';
import classes from './profileInfo.module.css';
import userPhoto from "../../../assets/images/user.png"
import ProfileStatusHooks from './profileStatusHooks';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62oOaTrZg_IOaAlV7_Qupw6liiJpMWRcpbQ&usqp=CAU'/>
            </div>
            <div>
                <img className={classes.userAva} src={props.profilePage.ava ? props.profilePage.ava : userPhoto}/>
            </div>
            <div>
                <span>{props.profilePage.description}</span>
            </div>
            <div>
                <ProfileStatusHooks status={props.profilePage.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    );
};

export default ProfileInfo;