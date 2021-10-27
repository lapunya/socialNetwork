import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import Posts from './posts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postContent,
        realTimePost: state.profilePage.realTimePost
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        updatePostText: (updatedPostText) => {
            let action = updatePostTextActionCreator(updatedPostText);
            dispatch(action);
        }
    }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;