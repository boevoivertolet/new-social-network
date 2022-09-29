import {ActionType, ProfilePageType} from '../Types/Types';
import {v1} from 'uuid';
import {avatars} from '../Avatars/Avatars';


const profilePageReducer = (profilePage: ProfilePageType, action: ActionType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                postId: v1(),
                message: profilePage.newPostText,
                likesCount: 0,
                ava: avatars[3].link
            }
            if (profilePage.newPostText) {
                profilePage.postsData.unshift(newPost);
                profilePage.newPostText = ''
                // store._callSubscriber(store.getState());
            }
            break;
        case 'UPDATE-NEW-POST-TEXT':
            profilePage.newPostText = action.newPostText
            // store._callSubscriber(store.getState());
            break;
        case 'LIKES-COUNTER':
            //store.getState().profilePage.postsData[0].likesCount = store.getState().profilePage.postsData[0].likesCount + 1
            console.log('like')
            // store._callSubscriber(store.getState());

            break;
    }
    return profilePage;
}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText: text} as const)
export const likesCounterAC = () => ({type: 'LIKES-COUNTER'} as const)

export default profilePageReducer;

