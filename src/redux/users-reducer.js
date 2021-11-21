import { usersApi, followApi } from "../api/api";

const TOGGLED = 'TOGGLED';
const SET_USERS = 'SET_USERS';
const GET_PAGE_COUNT = 'GET_PAGE_COUNT';
const SET_USER_LIMIT = 'SET_USER_LIMIT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_LOADING = 'TOGGLE_LOADING';
const FOLLOW_LOADING = 'FOLLOW_LOADING';

let initialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLED: {
            let stateCopy = {
                ...state,
                users: state.users.map(el => {
                    if (el.id === +action.userId) {
                        return {...el, followed: !el.followed};
                    }
                    return el;
                })
            };
            return stateCopy;
        }

        case SET_USERS: {
            let stateCopy = {
                ...state, 
                users: action.users
            }
            return stateCopy;
        }

        case GET_PAGE_COUNT: {
            let stateCopy = {
                ...state, 
                totalCount: action.pagesCount
            }
            return stateCopy;
        }

        case SET_USER_LIMIT: {
            let stateCopy = {
                ...state, 
                pageSize: action.limit
            }
            return stateCopy;
        }

        case SET_CURRENT_PAGE: {
            let stateCopy = {
                ...state,
                currentPage: action.currentPage
            }
            return stateCopy;
        }

        case TOGGLE_LOADING: {
            let stateCopy = {
                ...state,
                isLoading: action.isLoading
            }
            return stateCopy;
        }

        case FOLLOW_LOADING: {
            let stateCopy = {
                ...state,
                followingInProgress: action.isFollowLoading
                ? [...state.followingInProgress, action.clickedUserId]
                : state.followingInProgress.filter(id => id !== action.clickedUserId)

            }
            return stateCopy;
        }

        default:
            return state;

    }
};

export const toggleFollow = (userId) => ({type: TOGGLED, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const getPagesCount = (pagesCount) => ({type: GET_PAGE_COUNT, pagesCount});
export const getUserLimit = (limit) => ({type: SET_USER_LIMIT, limit});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleLoading = (isLoading) => ({type: TOGGLE_LOADING, isLoading});
export const followLoading = (isFollowLoading, clickedUserId) => ({type: FOLLOW_LOADING, isFollowLoading, clickedUserId});

export const getUsersThunkCreator = (currentPage, pageSize) => { // thunk creator - принимает параметры и возвращает thunk
    
    return (dispatch) => {
        dispatch(toggleLoading(true));

        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleLoading(false));
            dispatch(setUsers(data.items));
            dispatch(getPagesCount(data.totalCount));
        })
    }
    
};
export const pageChangeThunkCreator = (currentPage, pageSize) => { // thunk creator - принимает параметры и возвращает thunk
    
    return (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleLoading(true));
        
        usersApi.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleLoading(false));
            dispatch(setUsers(data.items));
            // this.props.getUserLimit(data.pageSize);
        })
    }
    
};

export const followThunkCreator = (userId) => { // thunk creator - принимает параметры и возвращает thunk
    
    return (dispatch) => {
        dispatch(followLoading(true, userId));
        followApi.checkSubscribe(userId)
        .then(data => {
            if (data) {
                followApi.removeSubscribe(userId)
                .then(data => {
                    if (data.resultCode == 0) {
                        dispatch(toggleFollow(userId));
                    }
                    dispatch(followLoading(false, userId));
                })
            } else {
                followApi.addSubscribe(userId)
                .then(data => {
                    if (data.resultCode == 0) {
                        dispatch(toggleFollow(userId));
                    }
                    dispatch(followLoading(false, userId));
                })
            }
        })
    }  
};



export default usersReducer;