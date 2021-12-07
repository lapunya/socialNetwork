import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import Posts from './posts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postContent
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPostActionCreator(postText));
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;