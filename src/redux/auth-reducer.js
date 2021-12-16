import { stopSubmit } from "redux-form";
import { authApi, loginApi } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data
            }
        
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const setAuthUserDataThunk = () => {
    return (dispatch) => {
        return authApi.getAuthUserData()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
};

export const login = (formData) => {
    return (dispatch) => {
        loginApi.getYourData(formData)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserDataThunk());
            } else {
                debugger
                let message = data.messages.length ? data.messages[0] : 'Some errrror'
                dispatch(stopSubmit("login", {_error: message}));
            }
        })
    }
};

export const logout = () => {
    return (dispatch) => {
        loginApi.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
};

export default authReducer;