import React from 'react';
import PostsContainer from './posts/posts-container';
import classes from './profile.module.css';
import ProfileInfo from './profileInfo/profileInfo';

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <PostsContainer/>
        </div>
    );
};

export default Profile;