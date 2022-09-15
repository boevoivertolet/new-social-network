import React from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'
import {DialogsMessages} from './dialogs-components/DialogsMessages/DialogsMessages';
import {DialogsNames} from './dialogs-components/DialogsNames/DialogsNames';
import {DialogsHeader} from './dialogs-components/DialogsHeader/DialogsHeader';


export const Dialogs = (props: DialogsType) => {




    return <div className={styles.dialogs}>
        <div>
            <DialogsHeader title={'Dialogs'}/>
            <DialogsNames name={props.dialogsData[0].name} id={props.dialogsData[0].id}/>
            <DialogsNames name={props.dialogsData[1].name} id={props.dialogsData[1].id}/>
            <DialogsNames name={props.dialogsData[2].name} id={props.dialogsData[2].id}/>


        </div>

        <div>
            <DialogsHeader title={'Messages'}/>
            <DialogsMessages message={'message'}/>
        </div>


    </div>
}

