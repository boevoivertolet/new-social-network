import {ActionType, UserType, InitialUsersStateType} from '../Types/Types';


let initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
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
                users: [...action.users]
            }
        case 'SET-CURRENT-PAGE':
            return {
                ...state, currentPage: action.currentPage
            }
        case 'SET-USERS-TOTAL-COUNT':
            return {
                ...state, totalCount: action.totalCount
            }
        case 'SET-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'SET-IS-FOLLOWING-PROGRESS':
            return {
                ...state, followingInProgress: action.isFetching
            }

        default:
            return state;
    }


}

export const follow = (userId: string) => ({type: 'FOLLOW', userId} as const)//Action Create
export const unfollow = (userId: string) => ({type: 'UNFOLLOW', userId} as const)//Action Create
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)//Action Create
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)//Action Create
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount} as const)//Action Create
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const)//Action Create
export const setIsFollowingProgress = (isFetching: boolean) => ({type: 'SET-IS-FOLLOWING-PROGRESS', isFetching} as const)//Action Create

export default usersReducer
