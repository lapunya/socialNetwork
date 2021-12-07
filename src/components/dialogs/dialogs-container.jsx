import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { addMessageActionCreator } from '../../redux/message-reducer';
import Dialogs from './dialogs';


let mapStateToProps = (state) => {
    return {
        dialogData: state.messagePage.dialogData,
        dialogContent: state.messagePage.dialogContent
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageText) => {
            dispatch(addMessageActionCreator(messageText));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);