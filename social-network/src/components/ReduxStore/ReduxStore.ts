import {combineReducers, legacy_createStore} from 'redux';
import profilePageReducer from '../Reducers/profilePageReducer';
import dialogsPageReducer from '../Reducers/dialogsPageReducer';
import sidebarReducer from '../Reducers/sidebarReducer';
import usersReducer from '../Reducers/usersReducer';
import authReducer from '../Reducers/authReducer';


let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        auth: authReducer
    }
)


export type ReduxStoreType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer);


// @ts-ignore

window.store = store.getState()


