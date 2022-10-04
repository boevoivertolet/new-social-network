import React from 'react';
import {
    DialogsMapDispatchToPropsType,
    DialogsMapStateToPropsType,
    DialogsPageType,
    StateType,
} from '../Types/Types';
import {addMessageAC, updateNewMessageTextAC} from '../Reducers/dialogsPageReducer';
import {Dialogs} from './Dialogs';

import {connect} from 'react-redux';

import {Dispatch} from 'redux';


// export const DialogsContainer = (props: DialogsContainerType) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store: StoreType) => {
//                     let dialogsPage = store.getState().dialogsPage
//
//                     const addMessage = () => {
//                         store.dispatch(addMessageAC())
//                     }
//                     const onChangeHandler = (text: string) => {
//                         store.dispatch(updateNewMessageTextAC(text))
//                     }
//
//
//                     return <Dialogs
//                         dialogsPage={dialogsPage}
//                         addMessage={addMessage}
//                         onChangeHandler={onChangeHandler}
//                     />
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
// }






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
