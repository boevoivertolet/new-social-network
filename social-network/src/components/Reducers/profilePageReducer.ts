import {ActionType, StoreType} from '../Types/Types';
import {v1} from 'uuid';

const profilePageReducer = (store: StoreType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                postId: v1(),
                message: store.getState().profilePage.newPostText,
                likesCount: 0,
                ava: store.getState().sidebar.peoples[3].link
            }
            if (store.getState().profilePage.newPostText) {
                store.getState().profilePage.postsData.unshift(newPost);
                store.getState().profilePage.newPostText = ''
                 store._callSubscriber(store.getState());
            }
            break;
        case 'UPDATE-NEW-POST-TEXT':
            store.getState().profilePage.newPostText = action.newPostText
            store._callSubscriber(store.getState());
            break;
        case 'LIKES-COUNTER':
            store.getState().profilePage.postsData[0].likesCount = store.getState().profilePage.postsData[0].likesCount + 1
             store._callSubscriber(store.getState());
            break;
    }
    return store;
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText: text} as const)
export const likesCounterAC = () => ({type: 'LIKES-COUNTER'} as const)

export default profilePageReducer;

