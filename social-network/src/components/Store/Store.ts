import {StateType} from '../Types/Types';

export let state: StateType = {
    dialogsPage: {
        dialogsData: [
            {id: '1', name: 'Sasha'},
            {id: '2', name: 'Ulya'},
            {id: '3', name: 'Taras'}
        ],
        messagesData: {
            messagesDataIn: [
                {id: '1', messageIn: ' message'}

            ],
            messagesDataOut: [
                {id: '4', messageOut: ' message  message '}

            ],
        }
    },
    profilePage: {
        postsData: [
            {id: '1', message: 'mes1', likesCount: '1'},
            {id: '2', message: 'mes2', likesCount: '2'},
            {id: '3', message: 'mes3', likesCount: '3'},
            {id: '4', message: 'mes4', likesCount: '4'}
        ]
    }
}



