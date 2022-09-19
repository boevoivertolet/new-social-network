import styles from './DialogsMessagesOut.module.css';
import React from 'react';
import {DialogsMessagesOutType} from '../../../../../Types/Types';


export const DialogsMessagesOut = (props: DialogsMessagesOutType) => {
    return <div className={styles.dialogs_message_out}><span >
        <img className={styles.avatar} src='https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png'/>
    </span>Out:{props.messagesOut}</div>

}