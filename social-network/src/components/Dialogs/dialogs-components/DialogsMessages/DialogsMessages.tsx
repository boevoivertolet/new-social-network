import React from 'react';
import {DialogsMessagesType} from '../../../Types/Types';
import styles from './DialogsMessages.module.css'
import {DialogsMessagesIn} from './dialog-messages-components/DialogsMessagesIn/DialogsMessagesIn';


export const DialogsMessages = (props: DialogsMessagesType) => {
    return <div className={styles.dialogs_messages}>
        <DialogsMessagesIn message={props.message} />
    </div>

}
