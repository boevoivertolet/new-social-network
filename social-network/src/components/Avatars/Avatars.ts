import {AvatarsType} from '../Types/Types';
import {v1} from 'uuid';

export let avatars: AvatarsType[] = [
    {
        id: v1(),
        name: 'Galina',
        link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZB-Q5UBGWl2XWzsnMC1vL-MqsVaJok23UFBt79PT2IpZjrAI-yPMb-02qBAp79jJcBw&usqp=CAU'
    },
    {
        id: v1(),
        name: 'Ulya',
        link: 'https://n1s1.hsmedia.ru/85/64/3f/85643f2e03be52b0bc00cb0f60b12f31/728x546_1_76d11b54618da2bff71c051801a697db@1441x1081_0xac120003_18866572441655464119.jpeg'
    },
    {
        id: v1(),
        name: 'Taras',
        link: 'https://cdnstatic.rg.ru/uploads/images/gallery/84f24d10/19_b6265e7a.jpg'
    },
    {
        id: v1(),
        name: 'Alexander',
        link: 'https://img01.rl0.ru/afisha/e1200x600i/daily.afisha.ru/uploads/images/2/f2/2f23c421db983f28be0a4d9e84fe1d3d.png'
    }

]