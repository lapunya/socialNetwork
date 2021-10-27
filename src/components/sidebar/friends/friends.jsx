import React from 'react';
import Friend from './friend/friend';
import classes from './friends.module.css'

const Friends = (props) => {

    let resultFriendData = props.friendsData.map(el => <Friend key={el.id} friendAvatar={el.avatar} friendName={el.friendName} />)

    return (
        <div className={classes.friends}>
            <h2 className={classes.friendsTitle}>Friends</h2>
            <ul className={classes.friendsList}>
                {resultFriendData}
            </ul>
        </div>
    );
};

export default Friends;