import {ActionType,  StoreType} from '../Types/Types';
import {v1} from 'uuid';

const dialogsPageReducer = (store: StoreType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {id: v1(), messageOut: store.getState().dialogsPage.newMessageText}
            if (store.getState().dialogsPage.newMessageText) {
                store.getState().dialogsPage.messagesData.messagesDataOut.push(newMessage);
                store.getState().dialogsPage.newMessageText = ''
                store._callSubscriber(store.getState());
            }
            break;
        case 'UPDATE-NEW-MESSAGE-TEXT':
            store.getState().dialogsPage.newMessageText = action.newMessageText
            store._callSubscriber(store.getState());
            break;
    }
    return store;
}


export default dialogsPageReducer;