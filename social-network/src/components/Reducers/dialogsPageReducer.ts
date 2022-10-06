import {ActionType, DialogsPageType, StoreType} from '../Types/Types';
import {v1} from 'uuid';
import {avatars} from '../Avatars/Avatars';


let initialState: DialogsPageType = {
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
}

const dialogsPageReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessageText = state.newMessageText
            return {
                ...state, newMessageText: '',
                messagesData: {
                    ...state.messagesData,
                    messagesDataOut: [...state.messagesData.messagesDataOut,{id:v1(),messageOut:newMessageText}]
                }
            }

        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state, newMessageText: action.newMessageText
            }

        default:
            return state
    }

}


export const addMessageAC = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessageTextAC = (text: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newMessageText: text
} as const)


export default dialogsPageReducer;