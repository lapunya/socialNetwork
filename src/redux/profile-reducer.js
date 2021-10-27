const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
    postContent: [
        { id: 1, postText: 'Here I sit', likesCount: 1 },
        { id: 2, postText: 'For meditate', likesCount: 4 },
        { id: 3, postText: 'Should I shit', likesCount: 8 },
        { id: 4, postText: 'Or masturbate', likesCount: 8 }
    ],

    realTimePost: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            stateCopy.postContent = [...state.postContent];

            let lastPost = stateCopy.postContent[stateCopy.postContent.length - 1];
            let newPost = {
                id: lastPost.id + 1,
                postText: stateCopy.realTimePost,
                likesCount: 0
            };
            
            stateCopy.postContent.push(newPost);
            stateCopy.realTimePost = '';

            return stateCopy;
        }

        case UPDATE_POST: {
            let stateCopy = {...state};

            let updatedPost = action.newPostText;
            stateCopy.realTimePost = updatedPost;

            return stateCopy;
        }
        
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (newPostText) => ({type: UPDATE_POST, newPostText: newPostText});

export default profileReducer;