import {ActionType, InitialProfilePageType, ProfileType} from '../Types/Types';
import {v1} from 'uuid';
import {avatars} from '../Avatars/Avatars';


let initialState: InitialProfilePageType = {
    postsData: [
        {postId: v1(), message: 'mes', likesCount: 0, ava: avatars[3].link},
    ],
    newPostText: '',
    isFetching: false,
    profile: null
}


const profilePageReducer = (state: InitialProfilePageType = initialState, action: ActionType): InitialProfilePageType => {
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
        case 'SET-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'SET-USER-PROFILE':
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }

}

export const addPost = () => ({type: 'ADD-POST'} as const)
export const updateNewPostText = (text: string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText: text} as const)
export const likesCounter = () => ({type: 'LIKES-COUNTER'} as const)
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const)//Action Create
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile} as const)//Action Create

export default profilePageReducer;

