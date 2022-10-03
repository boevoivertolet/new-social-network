import React from 'react';
import {DialogsContainerType, StoreType} from '../Types/Types';
import {addMessageAC, updateNewMessageTextAC} from '../Reducers/dialogsPageReducer';
import {Dialogs} from './Dialogs';
import StoreContext from '../../StoreContext';


export const DialogsContainer = (props: DialogsContainerType) => {
    return(
        <StoreContext.Consumer>
            {
                (store:StoreType)=>{
                    let dialogsPage = store.getState().dialogsPage

                    const addMessage = () => {
                        store.dispatch(addMessageAC())
                    }
                    const onChangeHandler = (text: string) => {
                        store.dispatch(updateNewMessageTextAC(text))
                    }


                    return <Dialogs
                        dialogsPage={dialogsPage}
                        addMessage={addMessage}
                        onChangeHandler={onChangeHandler}
                    />
            }
            }
        </StoreContext.Consumer>
    )




}

