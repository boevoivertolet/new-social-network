import {ChangeEvent} from 'react';


export type ButtonType = {
    title: string
    callBack: () => void
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
export type DialogsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    onChangeHandler: (text: string) => void
}
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
export type ProfileType = {
    updateNewPostText:(text: string)=> void
    addPost:()=> void
    ava: string
    newPostText: string
    postsData: PostsDataType[]
    likesCounter: () => void


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
    ava: string
}
export type ImgType = {
    ava: string
}
export type PostAvatarType = {
    ava: string
}
export type NavbarType = {
    sidebar: SidebarType
}

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


export type AddPostActionType = {
    type: 'ADD-POST'
}
export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
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

export type DialogsContainerType = {
    store: StoreType

}
export type ProfileContainerType = {
    store: StoreType
}


export type NavbarContainerType = {
    // store: StoreType
}