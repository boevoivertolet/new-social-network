import {AvatarsType, StateType} from '../Types/Types';
import {v1} from 'uuid';


let avatars: AvatarsType[] = [
    {
        id: '0',
        name: 'Galina',
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZB-Q5UBGWl2XWzsnMC1vL-MqsVaJok23UFBt79PT2IpZjrAI-yPMb-02qBAp79jJcBw&usqp=CAU'
    },
    {
        id: '1',
        name: 'Ulya',
        link: 'https://n1s1.hsmedia.ru/85/64/3f/85643f2e03be52b0bc00cb0f60b12f31/728x546_1_76d11b54618da2bff71c051801a697db@1441x1081_0xac120003_18866572441655464119.jpeg'
    },
    {
        id: '2',
        name: 'Taras',
        link: 'https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg'
    },
    {
        id: '3',
        name: 'Alexander',
        link: 'https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png'
    }

]


export let state: StateType = {
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
        }
    },
    profilePage: {
        postsData: [
            {id: '1', message: 'mes1', likesCount: '1', ava: avatars[3].link},
            {id: '2', message: 'mes2', likesCount: '2', ava: avatars[3].link},
            {id: '3', message: 'mes3', likesCount: '3', ava: avatars[3].link},
            {id: '4', message: 'mes4', likesCount: '4', ava: avatars[3].link}
        ]
    },
    sidebar: {
        peoples: [
            {
                id: '0',
                name: 'Galina',
                link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZB-Q5UBGWl2XWzsnMC1vL-MqsVaJok23UFBt79PT2IpZjrAI-yPMb-02qBAp79jJcBw&usqp=CAU'
            },
            {
                id: '1',
                name: 'Ulya',
                link: 'https://n1s1.hsmedia.ru/85/64/3f/85643f2e03be52b0bc00cb0f60b12f31/728x546_1_76d11b54618da2bff71c051801a697db@1441x1081_0xac120003_18866572441655464119.jpeg'
            },
            {
                id: '2',
                name: 'Taras',
                link: 'https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg'
            },
            {
                id: '3',
                name: 'Alexander',
                link: 'https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png'
            }

        ]

    }


}

export const addPost = (postMessage: string) => {
    let newPost = {id: v1(), message: postMessage, likesCount: '0', ava: avatars[3].link}
    state.profilePage.postsData.push(newPost);
}

