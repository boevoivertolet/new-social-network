import {avatars} from '../Avatars/Avatars';
import {v1} from 'uuid';
import {ActionType, UsersInitialStateType} from '../Types/Types';


let initialState: UsersInitialStateType = {
    users: [
        {
            id: v1(),
            followed: true,
            name: avatars[0].name,
            avaLink: avatars[0].link,
            status: 'hi all',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        },
        {
            id: v1(),
            followed: true,
            name: avatars[1].name,
            avaLink: avatars[1].link,
            status: 'have a nice day',
            location: {country: 'Russia', city: 'Saint-Petersburg'}

        },
        {
            id: v1(),
            followed: true,
            name: avatars[2].name,
            avaLink: avatars[2].link,
            status: 'welcome',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        },
        {
            id: v1(),
            followed: true,
            name: avatars[3].name,
            avaLink: avatars[3].link,
            status: 'love music',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        }

    ]

}


export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionType): UsersInitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)
            }
        case 'SET-USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }


}

export const followAC = () => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = () => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = () => ({type: 'SET-USERS', users} as const)


