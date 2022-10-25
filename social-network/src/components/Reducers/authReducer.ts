import {ActionType, InitialAuthStateType, UserDataType} from '../Types/Types';


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

export const setAuthUserData = (data: UserDataType) => ({type: 'SET-USER-DATA', data} as const)//Action Create


export const setIsFetching = (isFetching: boolean) => ({type: 'SET-IS-FETCHING', isFetching} as const)//Action Create


export default authReducer
