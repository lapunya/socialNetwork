import { setAuthUserDataThunk } from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: 
            return {
                ...state,
                initialized: action.initialized
            }
        
        default:
            return state;
    }
}

export const initializedSuccess = (initialized) => ({type: SET_INITIALIZED, initialized});

export const initializeApp = () => (dispatch) => {
    let gg = dispatch(setAuthUserDataThunk());

    gg.then(() => {
        dispatch(initializedSuccess(true));
    })
};


export default appReducer;