import {StoreType} from '../Types/Types';
import {v1} from 'uuid';
import {avatars} from './Avatars';


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

    dispatch(action: any) {
        switch (action.type) {
            case 'ADD-POST':
                let newPost = {
                    postId: v1(),
                    message: this.getState().profilePage.newPostText,
                    likesCount: 0,
                    ava: this.getState().sidebar.peoples[3].link
                }
                if (this.getState().profilePage.newPostText) {
                    this.getState().profilePage.postsData.unshift(newPost);
                    this.getState().profilePage.newPostText = ''
                    this._callSubscriber(this.getState());
                }
                break;
            case 'ADD-MESSAGE':
                let newMessage = {id: v1(), messageOut: this.getState().dialogsPage.newMessageText}
                if (this.getState().dialogsPage.newMessageText) {
                    this.getState().dialogsPage.messagesData.messagesDataOut.push(newMessage);
                    this.getState().dialogsPage.newMessageText = ''
                    this._callSubscriber(this.getState());
                }
                break;
            case 'UPDATE-NEW-POST-TEXT':
                this.getState().profilePage.newPostText = action.newPostText
                this._callSubscriber(this.getState());
                break;
            case 'UPDATE-NEW-MESSAGE-TEXT':
                this.getState().dialogsPage.newMessageText = action.newMessageText
                this._callSubscriber(this.getState());
                break;
            case 'LIKES-COUNTER':
                this.getState().profilePage.postsData[0].likesCount = this.getState().profilePage.postsData[0].likesCount + 1
                this._callSubscriber(this.getState());
                break;
        }

    }
}


export const addPostAC = () => ({type: 'ADD-POST'} as const)
export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewPostTextAC = (text:string) => ({type: 'UPDATE-NEW-POST-TEXT', newPostText: text} as const)
export const updateNewMessageTextAC = (text:string) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text} as const)
export const likesCounterAC = () => ({type: 'LIKES-COUNTER'} as const)



// export type ActionType = AddPostActionType | updateNewPostTextActionType | updateNewMessageTextActionType | AddMessageActionType | likesCounterActionType
// export type AddPostActionType = {
//     type: 'ADD-POST'
// }
// export type AddMessageActionType = {
//     type: 'ADD-MESSAGE'
// }
// export type updateNewPostTextActionType = {
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }
// export type updateNewMessageTextActionType = {
//     type: 'UPDATE-NEW-MESSAGE-TEXT'
//     body: string
// }
// export type likesCounterActionType = {
//     type: 'LIKES-COUNTER'
// }




// @ts-ignore
window.store = store
