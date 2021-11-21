import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { addMessageActionCreator, onChangeMessageActionCreator } from '../../redux/message-reducer';
import Dialogs from './dialogs';


let mapStateToProps = (state) => {
    return {
        dialogData: state.messagePage.dialogData,
        dialogContent: state.messagePage.dialogContent,
        realTimeMessage: state.messagePage.realTimeMessage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onChangeMessage: (text) => {
            let action = onChangeMessageActionCreator(text);
            dispatch(action);
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);