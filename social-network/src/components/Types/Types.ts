export type ButtonType = {
    title: string
}
export type PostMessageType = {
    postMessage: string
}
export type PostLikesCountType = {
    likesCount: string
}


export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}
type DialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
type ProfilePageType = {
    postsData: PostsDataType[]
}


export type AppType = {
    state: StateType

}



export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type PostsDataType = {
    id: string
    message: string
    likesCount: string
}
export type DialogsType = {
    dialogsPage: DialogsPageType

}
export type NewsType = {}
export type MusicType = {}
export type SettingsType = {}
export type DialogsMessagesType = {
    message: string
}
export type DialogsNamesType = {
    name: string
    id: string
}
export type DialogsHeaderType = {
    title: string
}
export type ProfileType = {
    postsData: PostsDataType[]
}
export type MainContentType = {
    postsData: PostsDataType[]
}
export type PostType = {
    postsData: PostsDataType
}


