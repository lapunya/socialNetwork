const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
    
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
    ]
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let stateCopy = {...state};
            stateCopy.dialogContent = [...state.dialogContent];

            let lastMessage = stateCopy.dialogContent[stateCopy.dialogContent.length-1];
            let newMessage = {
                id: lastMessage.id + 1,
                messageText: action.messageText
            };

            stateCopy.dialogContent.push(newMessage);

            return stateCopy;
        }
        
        // case UPDATE_MESSAGE: {
        //     return {
        //         ...state,
        //         realTimeMessage: action.newMessageText
        //     }

        //     // let stateCopy = {...state};

        //     // 
        //     // stateCopy.realTimeMessage = updatedMessage;
        //     // return stateCopy;
        // }
            

        default:
            return state;
    }
};

export const addMessageActionCreator = (messageText) => ({type: ADD_MESSAGE, messageText});
//export const onChangeMessageActionCreator = (newMessageText) => ({type: UPDATE_MESSAGE, newMessageText: newMessageText});

export default messageReducer;