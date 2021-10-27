const TOGGLED = 'TOGGLED';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: []
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
                users: [...action.users]
            }
            return stateCopy;
        }

        default:
            return state;

    }
};

export const toggleAC = (userId) => ({type: TOGGLED, userId: userId});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});


export default usersReducer;