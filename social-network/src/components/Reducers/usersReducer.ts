import {avatars} from '../Avatars/Avatars';
import {v1} from 'uuid';
import {ActionType, UsersInitialStateType} from '../Types/Types';






let initialState: UsersInitialStateType = {
    users: [
        {
            id: v1(),
            name: avatars[0].name,
            avaLink: avatars[0].link,
            status: 'hi all',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        },
        {
            id: v1(),
            name: avatars[1].name,
            avaLink: avatars[1].link,
            status: 'have a nice day',
            location: {country: 'Russia', city: 'Saint-Petersburg'}

        },
        {
            id: v1(),
            name: avatars[2].name,
            avaLink: avatars[2].link,
            status: 'welcome',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        },
        {
            id: v1(),
            name: avatars[3].name,
            avaLink: avatars[3].link,
            status: 'love music',
            location: {country: 'Russia', city: 'Saint-Petersburg'}
        }

    ]

}


export const usersReducer = (state: UsersInitialStateType = initialState, action: ActionType): UsersInitialStateType => {
    switch (action.type) {
        default:
            return state;
    }


}
export default usersReducer;