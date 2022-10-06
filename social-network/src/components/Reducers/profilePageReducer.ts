import {ActionType, ProfilePageType} from '../Types/Types';
import {v1} from 'uuid';
import {avatars} from '../Avatars/Avatars';


let initialState: ProfilePageType = {
    postsData: [
        {postId: v1(), message: 'mes', likesCount: 0, ava: avatars[3].link},
    ],
    newPostText: ''
}


const profilePageReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                postId: v1(),
                message: state.newPostText,
                likesCount: 0,
                ava: avatars[3].link
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            }
        case 'UPDATE-NEW-POST-TEXT':
            return {
                ...state,
                newPostText: action.newPostText
            }

        case 'LIKES-COUNTER':
            console.log('like')


            return state
        default:
            return state;
    }

}

export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const updateNewPostTextAC = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText: text} as const)
export const likesCounterAC = () => ({type: 'LIKES-COUNTER'} as const)

export default profilePageReducer;

