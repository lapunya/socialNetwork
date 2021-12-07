import { loginApi } from "../api/api";

const LOG_IN = 'LOG_IN';

let initialState = {
    email: null,
    password: null,
    rememberMe: false
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN: 
            return {
                ...state,
                ...action.data
            }
        default:
            return state;
    }
};


export const setAuthUserData = (userId, email, login) => ({type: LOG_IN, data: {userId, email, login}});

export const setAuthUserDataThunk = (formData) => {
    return (dispatch) => {
        loginApi.getYourData(formData)
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
};