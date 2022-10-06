import {ActionType, SidebarType} from '../Types/Types';
import {avatars} from '../Avatars/Avatars';


let initialState: SidebarType = {
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


export const sidebarReducer = (state: SidebarType = initialState, action: ActionType):SidebarType => {


    return state;
}
export default sidebarReducer;