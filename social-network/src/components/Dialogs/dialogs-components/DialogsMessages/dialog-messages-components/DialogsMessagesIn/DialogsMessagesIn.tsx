import styles from './DialogsMessagesIn.module.css';
import React from 'react';
import {DialogsMessagesInType} from '../../../../../Types/Types';

export const DialogsMessagesIn = (props: DialogsMessagesInType) => {
    return <div className={styles.dialogs_message_in}>{props.message}</div>

}