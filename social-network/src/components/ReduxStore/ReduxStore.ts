import {combineReducers, legacy_createStore} from 'redux';
import profilePageReducer from '../Reducers/profilePageReducer';
import dialogsPageReducer from '../Reducers/dialogsPageReducer';
import sidebarReducer from '../Reducers/sidebarReducer';



let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        sidebar: sidebarReducer
    }
)

export type RootReducerType = ReturnType<typeof rootReducer>


let store: RootReducerType = legacy_createStore(rootReducer);


// @ts-ignore
window.store = store


export default store;