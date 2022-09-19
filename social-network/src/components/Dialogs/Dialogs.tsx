import React from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'
import {DialogsMessages} from './dialogs-components/DialogsMessages/DialogsMessages';
import {DialogsNames} from './dialogs-components/DialogsNames/DialogsNames';
import {DialogsHeader} from './dialogs-components/DialogsHeader/DialogsHeader';


export const Dialogs = (props: DialogsType) => {

    let dialogName = props.dialogsPage.dialogsData.map(dialog => <DialogsNames key={dialog.id} name={dialog.name}
                                                                               id={dialog.id} ava={dialog.ava}/>);

    // let dialogMessageIn = props.dialogsPage.messagesData.messagesDataIn.map(m => <DialogsMessages
    //     key={m.id} messages={m.messageIn}/>);
    //
    //
    // let dialogMessageOut = props.dialogsPage.messagesData.messagesDataOut.map(m => <DialogsMessages
    //     key={m.id} messages={m.messageOut}/>);


    return <div className={styles.dialogs}>
        <div>
            <DialogsHeader title={'Dialogs'}/>
            {dialogName}
        </div>

        <div>
            <DialogsHeader title={'Messages'}/>

            <DialogsMessages dialogsPage={props.dialogsPage}/>

        </div>


    </div>
}

