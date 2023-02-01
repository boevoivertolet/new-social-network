import {combineReducers, legacy_createStore, applyMiddleware} from 'redux';
import profilePageReducer from '../Reducers/profilePageReducer';
import dialogsPageReducer from '../Reducers/dialogsPageReducer';
import sidebarReducer from '../Reducers/sidebarReducer';
import usersReducer from '../Reducers/usersReducer';
import authReducer from '../Reducers/authReducer';
import ThunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'


let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        auth: authReducer,
        form: formReducer
    }
)


export type ReduxStoreType = ReturnType<typeof rootReducer>

export const store = legacy_createStore(rootReducer, applyMiddleware(ThunkMiddleware));


// @ts-ignore

window.state = store.getState()


