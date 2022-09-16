import styles from './DialogsMessagesOut.module.css';
import React from 'react';
import {DialogsMessagesOutType} from '../../../../../Types/Types';


export const DialogsMessagesOut = (props: DialogsMessagesOutType) => {
    return <div className={styles.dialogs_message_out}>Out:{props.messagesOut}</div>

}