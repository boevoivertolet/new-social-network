import {StateType} from '../Types/Types';


let avatars =[
    {link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZB-Q5UBGWl2XWzsnMC1vL-MqsVaJok23UFBt79PT2IpZjrAI-yPMb-02qBAp79jJcBw&usqp=CAU' },
    {link: 'https://n1s1.hsmedia.ru/85/64/3f/85643f2e03be52b0bc00cb0f60b12f31/728x546_1_76d11b54618da2bff71c051801a697db@1441x1081_0xac120003_18866572441655464119.jpeg' },
    {link: 'https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg' }

]




export let state: StateType = {
    dialogsPage: {
        dialogsData: [
            {
                id: '1',
                name: 'Galina',
                ava: avatars[0].link
            },
            {
                id: '2',
                name: 'Ulya',
                ava: avatars[1].link
            },
            {id: '3', name: 'Taras', ava: avatars[2].link }
        ],
        messagesData: {
            messagesDataIn: [
                {id: '1', messageIn: ' message', ava: avatars[0].link }

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



