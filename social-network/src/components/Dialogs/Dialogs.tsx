import React from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'
import {DialogsMessages} from './dialogs-components/DialogsMessages/DialogsMessages';
import {DialogsNames} from './dialogs-components/DialogsNames/DialogsNames';
import {DialogsHeader} from './dialogs-components/DialogsHeader/DialogsHeader';


export const Dialogs = (props: DialogsType) => {

    let dialogName = props.dialogsData.map(dialog => <DialogsNames name={dialog.name} id={dialog.id}/>);

    let dialogMessage = props.messagesData.map(message => <DialogsMessages message={message.message}/>);



    return <div className={styles.dialogs}>
        <div>
            <DialogsHeader title={'Dialogs'}/>
            {dialogName}
        </div>

        <div>
            <DialogsHeader title={'Messages'}/>
            {dialogMessage}
        </div>


    </div>
}

