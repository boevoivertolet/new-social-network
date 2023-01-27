import React from 'react';
import {DialogsMapDispatchToPropsType, DialogsMapStateToPropsType,} from '../Types/Types';
import {addMessageAC, updateNewMessageTextAC} from '../Reducers/dialogsPageReducer';
import {Dialogs} from './Dialogs';

import {connect} from 'react-redux';

import {Dispatch} from 'redux';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';


const mapStateToProps = (state: ReduxStoreType): DialogsMapStateToPropsType => {

    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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
const AuthRedirectComponent = withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
