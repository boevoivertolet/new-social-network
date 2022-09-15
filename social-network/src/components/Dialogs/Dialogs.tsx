import React from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'
import {DialogsMessages} from './dialogs-components/DialogsMessages/DialogsMessages';
import {DialogsNames} from './dialogs-components/DialogsNames/DialogsNames';
import {DialogsHeader} from './dialogs-components/DialogsHeader/DialogsHeader';


export const Dialogs = (props: DialogsType) => {
    return <div className={styles.dialogs}>

        <DialogsHeader title={'Dialogs'}/>
        <DialogsHeader title={'Messages'}/>
        <DialogsNames name={'name1'} id={'1'}/>
        <DialogsNames name={'name2'} id={'2'}/>
        <DialogsNames name={'name3'} id={'3'}/>


        <DialogsMessages/>

    </div>
}

