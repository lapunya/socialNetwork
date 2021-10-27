import React from 'react';
import classes from './dialogs.module.css';
import DialogsMessageItem from './messageItem/messageItem';
import DialogsUserItem from './userItem/userItem';

const Dialogs = (props) => {

    let resultDialogData = props.dialogData.map(el => <DialogsUserItem key={el.id} id={el.id} userName={el.userName}/>);

    let resultDialogContent = props.dialogContent.map(el => <DialogsMessageItem key={el.id} message={el.messageText}/>)

    let addMessage = () => {
        if (props.realTimeMessage) {
            props.addMessage();
        }
    };

    let onChangeMessage = (el) => {
        let changedMessage = el.target.value;
        props.onChangeMessage(changedMessage);
    };

    return (
        <div className={classes.dialogs}>
            <ul className={classes.dialogsUserList}>
                {resultDialogData}
            </ul>
            <ul className={classes.dialogsMessageList}>
                {resultDialogContent}
            </ul>
            <div>
            <div className={classes.newMessageBox}>
                <textarea onChange={onChangeMessage} name="" id="" cols="30" rows="10" value={props.realTimeMessage}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
            </div>
            
        </div>
    );
}

export default Dialogs;