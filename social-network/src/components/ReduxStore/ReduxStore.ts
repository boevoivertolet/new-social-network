import {combineReducers, legacy_createStore} from 'redux';
import profilePageReducer from '../Reducers/profilePageReducer';
import dialogsPageReducer from '../Reducers/dialogsPageReducer';
import sidebarReducer from '../Reducers/sidebarReducer';
import {StoreType} from '../Types/Types';



let rootReducer = combineReducers(
    {
        profilePage: profilePageReducer,
        dialogsPage: dialogsPageReducer,
        sidebar: sidebarReducer
    }
)



let store: StoreType = legacy_createStore(rootReducer);


// @ts-ignore
window.store = store


export default store;