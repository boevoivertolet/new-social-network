import {avatars} from '../Avatars/Avatars';
import {v1} from 'uuid';
import {ActionType, InitialUsersType, UsersStateType} from '../Types/Types';


let initialState: UsersStateType = {
    users: [
       /* {
            id: v1(),
            followed: true,
            name: avatars[0].name,
            avaLink: avatars[0].link,
            status: 'status',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        },
        {
            id: v1(),
            followed: false,
            name: avatars[1].name,
            avaLink: avatars[1].link,
            status: 'status',
            location: {country: 'Russia', city: 'Saint-Petersburg'}

        },
        {
            id: v1(),
            followed: true,
            name: avatars[2].name,
            avaLink: avatars[2].link,
            status: 'status',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        },
        {
            id: v1(),
            followed: false,
            name: avatars[3].name,
            avaLink: avatars[3].link,
            status: 'status',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        }*/

    ]

}


const usersReducer = (state: UsersStateType = initialState, action: ActionType): UsersStateType => {
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

export const followAC = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unfollowAC = (userId: string) => ({type: 'UNFOLLOW', userId} as const)
export const setUsersAC = (users: InitialUsersType[]) => ({type: 'SET-USERS', users} as const)

export default usersReducer
