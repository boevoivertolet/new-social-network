import {ActionType, UserType, InitialUsersStateType} from '../Types/Types';
import {usersAPI} from '../../api/api';
import {Dispatch} from 'redux';


let initialState: InitialUsersStateType = {
    users: [],
    pageSize: 5,
    totalCount: 50,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
    }


}

//Action Creators
export const follow = (userId: string) => ({type: 'FOLLOW', userId} as const)//Action Create
export const unfollow = (userId: string) => ({type: 'UNFOLLOW', userId} as const)//Action Create
export const setUsers = (users: UserType[]) => ({type: 'SET-USERS', users} as const)//Action Create
export const setCurrentPage = (currentPage: number) => ({type: 'SET-CURRENT-PAGE', currentPage} as const)//Action Create
export const setTotalUsersCount = (totalCount: number) => ({type: 'SET-USERS-TOTAL-COUNT', totalCount} as const)//Action Create
export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const)//Action Create
export const setIsFollowingProgress = (isFetching: boolean, userId: string) => ({
    type: 'SET-IS-FOLLOWING-PROGRESS',
    isFetching, userId
} as const)//Action Create

//Thunk Creator

export const getUsersThunkCreator = (currentPage:number,pageSize:number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}


export default usersReducer
