import React from 'react';
import Post from './post/post';
import classes from './posts.module.css';

const Posts = (props) => {

    let resultPostContent = props.posts.map(el => <Post key={el.id} message={el.postText} likeCount={el.likesCount}/>)


    let addPost = () => {
        if (props.realTimePost) {
            props.addPost();
        }
        
    };

    let updatePostText = (el) => {
        let updatedPostText = el.target.value;
        props.updatePostText(updatedPostText);
    };


    return (
        <div>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={updatePostText} name="" id="" cols="20" rows="5" value={props.realTimePost}></textarea>
                </div>
                <div>
                    <button onClick={ addPost }>Add post</button>
                </div>
            </div>
            <div>
                {resultPostContent}
            </div>
        </div>
    );
};

export default Posts;