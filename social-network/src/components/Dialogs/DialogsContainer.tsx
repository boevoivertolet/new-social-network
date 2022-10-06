import React from 'react';
import {
    DialogsMapDispatchToPropsType,
    DialogsMapStateToPropsType,
    StateType,
} from '../Types/Types';
import {addMessageAC, updateNewMessageTextAC} from '../Reducers/dialogsPageReducer';
import {Dialogs} from './Dialogs';

import {connect} from 'react-redux';

import {Dispatch} from 'redux';



const mapStateToProps = (state: StateType): DialogsMapStateToPropsType => {

    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): DialogsMapDispatchToPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },
        onChangeHandler: (text: string) => {
            dispatch(updateNewMessageTextAC(text));
        }
    }

}


export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
