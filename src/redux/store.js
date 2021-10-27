import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";

let store = {
    _state: {
        profilePage: {
            postContent: [
                { id: 1, postText: 'Here I sit', likesCount: 1 },
                { id: 2, postText: 'For meditate', likesCount: 4 },
                { id: 3, postText: 'Should I shit', likesCount: 8 },
                { id: 4, postText: 'Or masturbate', likesCount: 8 }
            ],
    
            realTimePost: ''
        },
        messagePage: {
            dialogData: [
                { id: 1, userName: 'Rachel' },
                { id: 2, userName: 'Monica' },
                { id: 3, userName: 'Phibi' },
                { id: 4, userName: 'Ross' },
                { id: 5, userName: 'Chandler' },
                { id: 6, userName: 'Joey' }
            ],
    
            dialogContent: [
                { id: 1, messageText: 'How' },
                { id: 2, messageText: 'U' },
                { id: 3, messageText: 'Doin' }
            ],
    
            realTimeMessage: ''
        },
        sidebar: {
            friendsData: [
                { id: 1, friendName: 'Rachel', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU' },
                { id: 2, friendName: 'Monica', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU' },
                { id: 3, friendName: 'Phibi', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU' }
            ]
        }
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = messageReducer(this._state.messagePage, action);

        this._renderPage(this._state);
    },

    getState () {
        return this._state;
    },

    _renderPage () {
        console.log('sssss');
    },

    subscribe (observer) {
        this._renderPage = observer;
    }
};

export default store;