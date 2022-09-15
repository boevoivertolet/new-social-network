import React from 'react';
import {DialogsMessagesType} from '../../../Types/Types';
import styles from './DialogsMessages.module.css'



export const DialogsMessages = (props: DialogsMessagesType) => {
    return <div className={styles.dialogs_messages}>
        <div className={styles.dialogs_message}>{props.message}</div>
    </div>

}