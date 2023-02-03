import { ActionType, InitialProfilePageType, UserProfileType } from '../Types/Types';
import { v1 } from 'uuid';
import { avatars } from '../Avatars/Avatars';
import { Dispatch } from 'redux';
import { profileAPI } from '../../api/api';


let initialState: InitialProfilePageType = {
    postsData: [
        { postId: v1(), message: 'mes', likesCount: 0, ava: avatars[3].link },
    ],
    newPostText: '',
    isFetching: false,
    userProfile: null,
    status: ''
}


const profilePageReducer = (state: InitialProfilePageType = initialState, action: ActionType): InitialProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                postId: v1(),
                message: action.newMEssageBody,
                likesCount: 0,
                ava: avatars[3].link
            }

            return {
                ...state,
                postsData: [newPost,...state.postsData],
                newPostText: ''
            }
        // case 'UPDATE-NEW-POST-TEXT':
        //     return {
        //         ...state,
        //         newPostText: action.newPostText
        //     }

        case 'LIKES-COUNTER':
            console.log('like')

            return state
        case 'SET-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'SET-USER-PROFILE':
            return {
                ...state, userProfile: action.userProfile
            }
        case 'SET-STATUS':
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }

}
// Action Creators
export const addPost = (newMEssageBody: string) => ({ type: 'ADD-POST',newMEssageBody } as const)
// export const updateNewPostText = (text: string) => ({ type: 'UPDATE-NEW-POST-TEXT', newPostText: text } as const)
export const likesCounter = () => ({ type: 'LIKES-COUNTER' } as const)
const setIsFetching = (isFetching: boolean) => ({ type: 'SET-IS-FETCHING', isFetching } as const)//Action Create
const setUserProfile = (userProfile: UserProfileType) => ({ type: 'SET-USER-PROFILE', userProfile } as const)//Action Create
const setStatusProfile = (status: string) => ({ type: 'SET-STATUS', status } as const)//Action Create

// Thunk Creators

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    profileAPI.getProfile(userId).then(data => {
        dispatch(setIsFetching(false))
        dispatch(setUserProfile(data))
    })
}
export const getStatusProfile = (userId: number) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    profileAPI.getStatus(userId).then(status => {
        console.log(status)
        dispatch(setIsFetching(false))
        if(status=== null){
            dispatch(setStatusProfile(';)'))
        }else{
            dispatch(setStatusProfile(status))
        }

    })
}
export const updateStatusProfile = (status: string) => (dispatch: Dispatch) => {
    console.log('Thunk:', status)
    dispatch(setIsFetching(true))
    profileAPI.updateStatus(status).then(res => {
        dispatch(setIsFetching(false))
        console.log('action:', status)
        if (res.data.resultCode === 0) {
            dispatch(setStatusProfile(status))
        }

    })
}












export default profilePageReducer;

