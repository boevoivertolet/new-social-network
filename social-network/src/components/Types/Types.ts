import React, {ChangeEvent} from 'react';
// @ts-ignore
import {RouteComponentProps} from 'react-router-dom';


export type ButtonType = {
    title: string
    callBack: () => void
    disabled?: boolean

}
export type PostMessageType = {
    postMessage: string
}
export type PostLikesCountType = {
    likesCount: number
}


export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType

    subscribe: (observer: any) => void
    dispatch: (action: ActionType) => void
}
export type UserDataType = {
    id: number | null
    email: string | null
    login: string | null
}

export type HeaderType = {
    isAuth: boolean
    data: UserDataType
}

export type HeaderMapDispatchToPropsType = {
    getAuthUserData: () => void
}

type HeaderConnectType = HeaderMapStateToPropsType & HeaderMapDispatchToPropsType


export type HeaderContainerType = HeaderConnectType


export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}
export type DialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType
    newMessageText: string
}
export type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string

}
export type InitialProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
    isFetching: boolean
    userProfile: null | UserProfileType
    status: string
}


export type AppType = {
    // store: StoreType
}


export type DialogsDataType = {
    id: string
    name: string
    ava: string
}
export type MessagesDataType = {
    messagesDataIn: MessagesDataInType[]
    messagesDataOut: MessagesDataOutType[]
}
export type MessagesDataInType = {
    id: string
    messageIn: string
    ava: string
}
export type MessagesDataOutType = {
    id: string
    messageOut: string
}
export type PostsDataType = {
    postId: string
    message: string
    likesCount: number
    ava: string
}

export type DialogsMapStateToPropsType = {
    dialogsPage: DialogsPageType
    isAuth: boolean
}
export type DialogsMapDispatchToPropsType = {
    addMessage: (newMEssageBody: string) => void
    onChangeHandler: (text: string) => void
}
export type UsersMapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    // acceptFollow: (usersId: string) => void
    // acceptUnfollow: (usersId: string) => void
    //setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    // setIsFetching: (isFetching: boolean) => void
    setIsFollowingProgress: (isFetching: boolean, userId: string) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

export type DialogsType = DialogsMapStateToPropsType & DialogsMapDispatchToPropsType


export type NewsType = {}
export type MusicType = {}
export type SettingsType = {}
export type DialogsMessagesType = {
    dialogsPage: DialogsPageType
}


export type DialogsNamesType = {
    name: string
    id: string
    ava: string
}
export type DialogsHeaderType = {
    title: string
}

export type ProfileMapDispatchToPropsType = {
    likesCounter: () => void
    addPost: () => void
    updateNewPostText: (text: string) => void
    // setIsFetching: (isFetching: boolean) => void
    setUserProfile: (userProfile: UserProfileType) => void
    getUserProfile: (userId: number) => void
    getStatusProfile: (userId: number) => void
    updateStatusProfile: (mess: string) => void
}
type PathParamsType = {
    userId: string;
}
export type ProfileConnectType =
    ProfileMapStateToPropsType
    & MapStateToPropsForRedirectType
    & ProfileMapDispatchToPropsType

export type ProfileContainerType =
    ProfileConnectType
    & RouteComponentProps<PathParamsType>
    & { router: { params: PathParamsType } }


type ContactsType = {
    facebook?: string
    github?: string
    instagram?: string
    twitter?: string
    vk?: string
}

export type UserProfileType = {
    aboutMe?: string
    contacts?: ContactsType
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: { small: string, large: string }
    userId: number

}
export type ProfileType = {
    updateNewPostText: (text: string) => void
    addPost: () => void
    newPostText: string
    postsData: PostsDataType[]
    likesCounter: () => void
    userProfile: UserProfileType | null
    isAuth: boolean
    status: string
    updateStatus: (status: string) => void

}


export type MainContentType = {
    postsData: PostsDataType[]
    likesCounter: () => void
}
export type PostType = {
    postsData: PostsDataType
    likesCounter: () => void
}


export type DialogsMessagesInType = {
    messagesIn: string
    ava: string
}

export type DialogsMessagesOutType = {
    messagesOut: string

}
export type AvatarDescriptionType = {
    userProfile: UserProfileType
    status: string
    updateStatus: (status: string) => void
}
export type ImgType = {
    ava: string | undefined
}
export type PostAvatarType = {
    ava: string
}

export type NavbarMapStateToPropsType = {
    sidebar: SidebarType
}
export type NavbarMapDispatchToPropsType = {}
export type NavbarType = NavbarMapStateToPropsType & NavbarMapDispatchToPropsType /*{
    sidebar: SidebarType
}*/

export type SidebarType = {
    peoples: PeoplesType[]
}
export type AvatarsType = {
    id: string
    name: string
    link: string
}
export type PeoplesType = {
    id: string
    name: string
    link: string
}
export type NewPostType = {
    newPostText: string
    updateNewPost: (text: string) => void
    addPost: () => void
}
export type UniversalTextareaType = {
    newText: string
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void
}


export type ActionType =
    AddPostActionType
    | updateNewPostTextActionType
    | updateNewMessageTextActionType
    | AddMessageActionType
    | likesCounterActionType
    | FollowActionType
    | UnFollowActionType
    | SetUsersActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | SetIsFetchingActionType
    | SetUserProfileActionType
    | SetUserDataActionType
    | SetIsFollowingProgressType
    | SetStatusProfileType

export type SetUserDataActionType = {
    type: 'SET-USER-DATA'
    data: UserDataType
}

export type AddPostActionType = {
    type: 'ADD-POST'
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMEssageBody: string
}
export type updateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPostText: string
}
export type updateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessageText: string
}
export type likesCounterActionType = {
    type: 'LIKES-COUNTER'

}
export type SetCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    currentPage: number

}
export type SetUserProfileActionType = {
    type: 'SET-USER-PROFILE'
    userProfile: null | UserProfileType

}
export type SetUsersTotalCountActionType = {
    type: 'SET-USERS-TOTAL-COUNT'
    totalCount: number

}
export type FollowActionType = {
    type: 'FOLLOW'
    userId: string
}
export type UnFollowActionType = {
    type: 'UNFOLLOW'
    userId: string
}
export type SetUsersActionType = {
    type: 'SET-USERS'
    users: UserType[]
}
export type SetIsFetchingActionType = {
    type: 'SET-IS-FETCHING'
    isFetching: boolean
}
export type SetIsFollowingProgressType = {
    type: 'SET-IS-FOLLOWING-PROGRESS'
    isFetching: boolean
    userId: string

}
export type SetStatusProfileType = {
    type: 'SET-STATUS'
    status: string

}


// export type DialogsContainerType = {
//     // store: StoreType
//
// }


export type NavbarContainerType = {
    // store: StoreType
}

export type ProviderType = {
    store: StoreType
    children: React.ReactNode
}

export type UsersType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    // acceptFollow: (usersId: string) => void
    // acceptUnfollow: (usersId: string) => void
    //setUsers: (users: UserType[]) => void
    setCurrentPage: (currentPage: number) => void
    //setTotalUsersCount: (totalCount: number) => void
    onPageChanged: (pageNumber: number) => void
    setIsFollowingProgress: (isFetching: boolean, userId: string) => void
    followingInProgress: FollowingInProgressType


}
export type UsersClassContainerType = UsersMapStateToPropsType & UsersMapDispatchToPropsType

type FollowingInProgressType = Array<string>

export type InitialUsersStateType = {
    users: Array<UserType>
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: FollowingInProgressType
}

type PhotosType = {
    small: string | undefined
    large: string | undefined
}
export type UserType = {
    id: string
    followed: boolean
    name: string
    status: string
    photos: PhotosType

}
// export type LocationType = {
//     country: string
//     city: string
// }

export type UsersMapStateToPropsType = {
    users: UserType[]
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: FollowingInProgressType
}

// type StatusType ={
//     status: string
// }
export type ProfileMapStateToPropsType = {
    postsData: PostsDataType[]
    newPostText: string
    userProfile: null | UserProfileType
    // status: StatusType
    /*    isAuth: boolean*/
    status: string


}
export type MapStateToPropsForRedirectType = {
    isAuth: boolean
}
export type PreloaderType = {}

export type NameDescriptionType = {
    userName: string
    aboutMe: string | undefined
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: ContactsType | undefined
    status: string
    updateStatus: (status: string) => void

}
export type InitialAuthStateType = {
    data: UserDataType
    isAuth: boolean
    isFetching: boolean
}

export type HeaderMapStateToPropsType = {
    isAuth: boolean
    data: UserDataType
}


export type LoginType = {}
