import {ActionType, UserType, InitialUsersStateType} from '../Types/Types';


let initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount:0
}


const usersReducer = (state: InitialUsersStateType = initialState, action: ActionType): InitialUsersStateType => {
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
export const setUsersAC = (users: UserType[]) => ({type: 'SET-USERS', users} as const)

export default usersReducer
