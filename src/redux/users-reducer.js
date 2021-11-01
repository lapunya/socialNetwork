const TOGGLED = 'TOGGLED';
const SET_USERS = 'SET_USERS';
const GET_PAGE_COUNT = 'GET_PAGE_COUNT';
const SET_USER_LIMIT = 'SET_USER_LIMIT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

let initialState = {
    users: [],
    pageSize: 10,
    totalCount: 0,
    currentPage: 2
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

        default:
            return state;

    }
};

export const toggleAC = (userId) => ({type: TOGGLED, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const getPagesCountsAC = (pagesCount) => ({type: GET_PAGE_COUNT, pagesCount});
export const getUserLimitAC = (limit) => ({type: SET_USER_LIMIT, limit});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});


export default usersReducer;