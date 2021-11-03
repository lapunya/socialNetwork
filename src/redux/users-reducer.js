const TOGGLED = 'TOGGLED';
const SET_USERS = 'SET_USERS';
const GET_PAGE_COUNT = 'GET_PAGE_COUNT';
const SET_USER_LIMIT = 'SET_USER_LIMIT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_LOADING = 'TOGGLE_LOADING';

let initialState = {
    users: [],
    pageSize: 100,
    totalCount: 0,
    currentPage: 2,
    isLoading: false
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


export default usersReducer;