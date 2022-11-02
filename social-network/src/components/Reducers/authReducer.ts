import {ActionType, InitialAuthStateType, UserDataType} from '../Types/Types';
import {Dispatch} from 'redux';
import {authAPI} from '../../api/api';


let initialState: InitialAuthStateType = {
    data: {
        id: null,
        email: 'null',
        login: 'null',
    },
    isAuth: false,
    isFetching: false
}


const authReducer = (state: InitialAuthStateType = initialState, action: ActionType): InitialAuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case 'SET-IS-FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }


}
// Action Creators

const setAuthUserData = (data: UserDataType) => ({type: 'SET-USER-DATA', data} as const)//Action Create


const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const)//Action Create


// Thunk Creators


export const getAuthUserData = () => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    authAPI.getMe().then(data => {
        dispatch(setIsFetching(false))
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data))
        }

    })


}

export default authReducer
