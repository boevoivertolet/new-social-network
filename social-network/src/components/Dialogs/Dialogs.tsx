import React, {ChangeEvent} from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'
import {DialogsMessages} from './dialogs-components/DialogsMessages/DialogsMessages';
import {DialogsNames} from './dialogs-components/DialogsNames/DialogsNames';
import {DialogsHeader} from './dialogs-components/DialogsHeader/DialogsHeader';
import {UniversalTextarea} from '../UniversalTextarea/UniversalTextarea';
import {Button} from '../Button/Button';
import {addMessageAC, updateNewMessageTextAC} from '../Store/Store';


export const Dialogs = (props: DialogsType) => {


    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.store.dispatch(updateNewMessageTextAC(text))

    }


    let dialogName = props.store.getState().dialogsPage.dialogsData.map(dialog => <DialogsNames key={dialog.id}
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

            <DialogsMessages dialogsPage={props.store.getState().dialogsPage}/>
        </div>
        <div className={styles.textarea}>

            <UniversalTextarea newText={props.store.getState().dialogsPage.newMessageText}
                               onChangeHandler={onChangeHandler.bind(props.store)}/>
            <Button callBack={addMessage} title={'send'}/>

        </div>

    </div>
}

