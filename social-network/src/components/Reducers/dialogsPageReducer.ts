import {ActionType, DialogsPageType, StoreType} from '../Types/Types';
import {v1} from 'uuid';

const dialogsPageReducer = (dialogsPage: DialogsPageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {id: v1(), messageOut: dialogsPage.newMessageText}
            if (dialogsPage.newMessageText) {
                dialogsPage.messagesData.messagesDataOut.push(newMessage);
                dialogsPage.newMessageText = ''
                // store._callSubscriber(store.getState());
            }
            break;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            dialogsPage.newMessageText = action.newMessageText
            // store._callSubscriber(store.getState());
            break;
    }
    return dialogsPage;
}


export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessageTextAC = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: text
} as const)


export default dialogsPageReducer;