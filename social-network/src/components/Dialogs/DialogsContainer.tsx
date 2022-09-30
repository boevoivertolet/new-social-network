import React from 'react';
import {DialogsContainerType} from '../Types/Types';

import {addMessageAC, updateNewMessageTextAC} from '../Reducers/dialogsPageReducer';
import {Dialogs} from './Dialogs';


export const DialogsContainer = (props: DialogsContainerType) => {

    let dialogsPage = props.store.getState().dialogsPage

    const addMessage = () => {
        props.store.dispatch(addMessageAC())
    }
    const onChangeHandler = (text: string) => {
        props.store.dispatch(updateNewMessageTextAC(text))
    }


    return <Dialogs
        dialogsPage={dialogsPage}
        addMessage={addMessage}
        onChangeHandler={onChangeHandler}
    />


}

