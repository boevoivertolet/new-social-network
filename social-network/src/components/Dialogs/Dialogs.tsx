import React, {ChangeEvent} from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'
import {DialogsMessages} from './dialogs-components/DialogsMessages/DialogsMessages';
import {DialogsNames} from './dialogs-components/DialogsNames/DialogsNames';
import {DialogsHeader} from './dialogs-components/DialogsHeader/DialogsHeader';
import {UniversalTextarea} from '../UniversalTextarea/UniversalTextarea';
import {Button} from '../Button/Button';
import {Navigate} from 'react-router-dom';



export const Dialogs = (props: DialogsType) => {
    let dialogsData = props.dialogsPage.dialogsData

    const addMessage = () => {
        if (props.dialogsPage.newMessageText) {
            props.addMessage()
        }

    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.onChangeHandler(text)

    }



    let dialogName = dialogsData.map(dialog => <DialogsNames key={dialog.id}
                                                             name={dialog.name}
                                                             id={dialog.id}
                                                             ava={dialog.ava}/>);




    return <div className={styles.dialogs}>
        <div>
            <DialogsHeader title={'Dialogs'}/>
            {dialogName}
        </div>

        <div>
            <DialogsHeader title={'Messages'}/>

            <DialogsMessages dialogsPage={props.dialogsPage}/>
        </div>
        <div className={styles.textarea}>

            <UniversalTextarea newText={props.dialogsPage.newMessageText}
                               onChangeHandler={onChangeHandler}/>
            <Button callBack={addMessage} title={'send'}/>

        </div>

    </div>
}

