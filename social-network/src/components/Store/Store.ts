import {ActionType, StoreType} from '../Types/Types';
import {v1} from 'uuid';
import {avatars} from '../Avatars/Avatars';
import profilePageReducer from '../Reducers/profilePageReducer';
import dialogsPageReducer from '../Reducers/dialogsPageReducer';
import sidebarReducer from '../Reducers/sidebarReducer';


export let store: StoreType = {
    _state: {
        profilePage: {
            postsData: [
                {postId: v1(), message: 'mes', likesCount: 0, ava: avatars[3].link},
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: avatars[0].id,
                    name: avatars[0].name,
                    ava: avatars[0].link
                },
                {
                    id: avatars[1].id,
                    name: avatars[1].name,
                    ava: avatars[1].link
                },
                {
                    id: avatars[2].id,
                    name: avatars[2].name,
                    ava: avatars[2].link
                }
            ],
            messagesData: {
                messagesDataIn: [
                    {id: avatars[0].id, messageIn: ' message', ava: avatars[0].link}

                ],
                messagesDataOut: [
                    {id: avatars[3].id, messageOut: ' message  message '}

                ],
            },
            newMessageText: ''
        },
        sidebar: {
            peoples: [
                {
                    id: avatars[0].id,
                    name: avatars[0].name,
                    link: avatars[0].link
                },
                {
                    id: avatars[1].id,
                    name: avatars[1].name,
                    link: avatars[1].link
                },
                {
                    id: avatars[2].id,
                    name: avatars[2].name,
                    link: avatars[2].link
                },
                {
                    id: avatars[3].id,
                    name: avatars[3].name,
                    link: avatars[3].link
                }

            ]

        }
    },
    _callSubscriber() {
        console.log('state was changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action: ActionType) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)
        sidebarReducer(this, action)
        this._callSubscriber(this._state);

    }


}


// @ts-ignore
window.store = store
