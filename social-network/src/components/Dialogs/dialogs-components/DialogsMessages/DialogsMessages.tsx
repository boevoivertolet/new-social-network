import React from 'react';
import {DialogsMessagesType} from '../../../Types/Types';
import styles from './DialogsMessages.module.css'
import {DialogsMessagesIn} from './dialog-messages-components/DialogsMessagesIn/DialogsMessagesIn';
import {DialogsMessagesOut} from './dialog-messages-components/DialogsMessagesOut/DialogsMessagesOut';


export const DialogsMessages = (props: DialogsMessagesType) => {


    let dialogMessageIn = props.dialogsPage.messagesData.messagesDataIn.map(m => <DialogsMessagesIn
        key={m.id} messagesIn={m.messageIn}/>);


    let dialogMessageOut = props.dialogsPage.messagesData.messagesDataOut.map(m => <DialogsMessagesOut
        key={m.id} messagesOut={m.messageOut}/>);


    return <div className={styles.dialogs_messages}>
        <div className={styles.dialogs_messages_left}>{dialogMessageIn}</div>
        <div className={styles.dialogs_messages_right}>{dialogMessageOut}</div>


    </div>

}
