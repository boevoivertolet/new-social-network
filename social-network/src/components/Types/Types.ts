import {addMessage, likesCounter, updateNewMessageText, updateNewPostText} from '../State/State';
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
    getState: () => StateType
    addPost: () => void
    addMessage: () => void
    _callSubscriber: (state: StateType) => void
    updateNewPostText: (newPostText: string) => void
    updateNewMessageText: (newPostText: string) => void
    likesCounter: () => void
    subscribe: (observer: any) => void
    dispatch: (action: any) => void

}


export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sidebar: SidebarType
}
type DialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType
    newPostText: string
}
type ProfilePageType = {
    postsData: PostsDataType[]
    newPostText: string
}


export type AppType = {
    // state: StateType
    // addPost: () => void
    // addMessage: () => void
    // likesCounter: () => void
    // updateNewPostText:(newText:string)=> void
    // updateNewMessageText:(newText:string)=> void
    store: StoreType

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
    // dialogsPage: DialogsPageType
    // updateNewMessageText: (newPostTex: string) => void
    // newPostText: string
    // addMessage: (postMessage: string) => void
    store: StoreType


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
    // postsData: PostsDataType[]
    // addPost: () => void
    // likesCounter: () => void
    // updateNewPostText:(newPostTex:string)=> void
    // newPostText:string
    store: StoreType

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
    dispatch: (action: object) => void
    newPostText: string

}
export type UniversalTextareaType = {

    newPostText: string
    // dispatch: (action: any) => void
    onChangeHandler: (event: ChangeEvent<HTMLTextAreaElement>) => void

}