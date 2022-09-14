import React from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'
import {DialogsMessages} from './dialogs-components/DialogsMessages/DialogsMessages';
import {DialogsNames} from './dialogs-components/DialogsNames/DialogsNames';


export const Dialogs = (props: DialogsType) => {
    return <div className={styles.dialogs}>

        <DialogsNames/>
        <DialogsMessages/>


    </div>
}

