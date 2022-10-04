import {ActionType, ProfilePageType} from '../Types/Types';
import {v1} from 'uuid';
import {avatars} from '../Avatars/Avatars';


let initialState: ProfilePageType = {
    postsData: [
        {postId: v1(), message: 'mes', likesCount: 0, ava: avatars[3].link},
    ],
    newPostText: ''
}


const profilePageReducer = (profilePage: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    let profilePageCopy = {...profilePage}
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                postId: v1(),
                message: profilePage.newPostText,
                likesCount: 0,
                ava: avatars[3].link
            }

            if (profilePageCopy.newPostText) {
                profilePageCopy.postsData = [...profilePage.postsData];
                profilePageCopy.postsData.unshift(newPost);
                profilePageCopy.newPostText = ''
                // store._callSubscriber(store.getState());
            }
            return profilePageCopy
        case 'UPDATE-NEW-POST-TEXT':
            profilePageCopy.newPostText = action.newPostText
            // store._callSubscriber(store.getState());
            return profilePageCopy
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

