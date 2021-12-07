import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validators';
import { MyTextarea } from '../common/formControls/inputField';
import classes from './dialogs.module.css';
import DialogsMessageItem from './messageItem/messageItem';
import DialogsUserItem from './userItem/userItem';

const Dialogs = (props) => {

    let resultDialogData = props.dialogData.map(el => <DialogsUserItem key={el.id} id={el.id} userName={el.userName}/>);

    let resultDialogContent = props.dialogContent.map(el => <DialogsMessageItem key={el.id} message={el.messageText}/>);

    let onSubmit = (formData) => {
        console.log(formData);
        if (formData.messageText) {
            props.addMessage(formData.messageText);
        }
    };

    return (
        
        <div className={classes.dialogs}>
            <ul className={classes.dialogsUserList}>
                {resultDialogData}
            </ul>
            <ul className={classes.dialogsMessageList}>
                {resultDialogContent}
            </ul>
            <MessageReduxForm onSubmit={onSubmit}/>    
            
        </div>
    );
}

let maxLength50 = maxLengthCreator(50);

const MessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.newMessageBox}>
                <Field component={MyTextarea} validate={[required, maxLength50]} name="messageText" id="" cols="30" rows="10" placeholder="New message"/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
};

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm);


export default Dialogs;