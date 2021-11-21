import { profileApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    postContent: [
        { id: 1, postText: 'Here I sit', likesCount: 1 },
        { id: 2, postText: 'For meditate', likesCount: 4 },
        { id: 3, postText: 'Should I shit', likesCount: 8 },
        { id: 4, postText: 'Or masturbate', likesCount: 8 }
    ],

    realTimePost: '',
    ava: '',
    description: 'Hello'
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

        case SET_PROFILE: {
            return {
                ...state,
                ava: action.profile.photos.small,
                description: action.profile.aboutMe
            }
        }
        
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (newPostText) => ({type: UPDATE_POST, newPostText});
export const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const getProfileDataThunk = (userId) => {
    return (dispatch) => {
        profileApi.getProfileData(userId)
        .then(data => {
            dispatch(setProfile(data));
        })
    }
}

export default profileReducer;