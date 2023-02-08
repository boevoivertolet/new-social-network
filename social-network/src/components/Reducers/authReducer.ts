import {LoginFormDataType} from './../Login/Login'
import {ActionType} from './../Types/Types'
import {InitialAuthStateType} from '../Types/Types'
import {Dispatch} from 'redux'
import {authAPI} from '../../api/api'
import {ThunkAction} from 'redux-thunk'

let initialState: InitialAuthStateType = {
    id: null,
    email: 'null',
    login: 'null',
    isAuth: false,
    isFetching: false
}

const authReducer = (
    state: InitialAuthStateType = initialState,
    action: ActionType
): InitialAuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        case 'SET-IS-FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}
// Action Creators

const setAuthUserData = (
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
) => ({type: 'SET-USER-DATA', payload: {id, email, login, isAuth}} as const) //Action Create

const setIsFetching = (isFetching: boolean) =>
    ({type: 'SET-IS-FETCHING', isFetching} as const) //Action Create

// Thunk Creators

export const getAuthUserData =
    (): ThunkAction<void, InitialAuthStateType, unknown, ActionType> =>
        (dispatch: Dispatch) => {
            dispatch(setIsFetching(true))
            authAPI.getMe().then((response) => {
                if (response.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setAuthUserData(id, login, email, true))
                    dispatch(setIsFetching(false))
                }
            })
        }

export const login =
    ({login, password, rememberMe}: LoginFormDataType) =>
        (dispatch: Dispatch) => {
            dispatch(setIsFetching(true))
            authAPI.login(login, password, rememberMe).then((res) => {
                if (res.resultCode === 0) {
                    // dispatch(getAuthUserData())
                    alert('getAuthUserData')
                }
            })
        }

export const logout = () => (dispatch: Dispatch<any>) => {
    dispatch(setIsFetching(true))
    authAPI.logout().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    })
}

// type AuthActionType = |  ReturnType<typeof setAuthUserData>  | ReturnType<typeof setIsFetching>

export default authReducer
