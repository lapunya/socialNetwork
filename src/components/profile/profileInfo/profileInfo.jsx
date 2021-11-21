import React from 'react';
import classes from './profileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS62oOaTrZg_IOaAlV7_Qupw6liiJpMWRcpbQ&usqp=CAU'/>
            </div>
            <div>
                <img src={props.profilePage.ava}/>
            </div>
            <div>
                <span>{props.profilePage.description}</span>
            </div>
        </div>
    );
};

export default ProfileInfo;