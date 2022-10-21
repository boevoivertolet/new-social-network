import {ActionType, InitialAuthStateType, UserType} from '../Types/Types';


let initialState: InitialAuthStateType = {
    id: null,
    email: null,
    login: null,
    isFetching: false
}


const authReducer = (state: InitialAuthStateType = initialState, action: ActionType): InitialAuthStateType => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state
            }

        default:
            return state;
    }


}

export const follow = () => ({type: 'SET-USER-DATA'} as const)//Action Create


export default authReducer
