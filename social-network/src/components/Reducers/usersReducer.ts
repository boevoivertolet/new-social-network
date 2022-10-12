import {ActionType, UserType, InitialUsersStateType} from '../Types/Types';


let initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 100,
    currentPage: 1,
    isFetching: false
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
                ...state, totalUsersCount: action.totalCount
            }
        case 'SET-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }

        default:
            return state;
    }


}

export const follow = (userId: string) => ({type: 'FOLLOW', userId} as const)
export const unfollow= (userId: string) => ({type: 'UNFOLLOW', userId} as const)
export const setUsers= (users: UserType[]) => ({type: 'SET-USERS', users} as const)
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount} as const)
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const)

export default usersReducer
