import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { MyTextarea } from '../../common/formControls/inputField';
import Post from './post/post';

const Posts = (props) => {

    let resultPostContent = props.posts.map(el => <Post key={el.id} message={el.postText} likeCount={el.likesCount}/>)

    let onSubmit = (formData) => {
        if (formData.postText) {
            props.addPost(formData.postText);
        }
    }

    return (
        <div>
            <h2>My posts</h2>
            <PostReduxForm onSubmit={onSubmit}/>
            {/* <form>
            <div>
                <Field component="textarea" onChange={updatePostText} name="PostText" id="" cols="20" rows="5" value={props.realTimePost}/>
            </div>
            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
        </form> */}
            <div>
                {resultPostContent}
            </div>
        </div>
    );
};

let maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {

    // let addPost = () => {
    //     if (props.realTimePost) {
    //         props.addPost();
    //     }
        
    // };

    // let updatePostText = (el) => {
    //     let updatedPostText = el.target.value;
    //     props.updatePostText(updatedPostText);
    // };

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={MyTextarea} validate={[required, maxLength10]} name="postText" id="" cols="20" rows="5" placeholder='New post'/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const PostReduxForm = reduxForm({ form: 'post' })(PostForm);

export default Posts;