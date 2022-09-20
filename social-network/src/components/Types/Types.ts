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
    messagesData: MessagesDataType
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
    id: string
    message: string
    likesCount: string
    ava:string
}
export type DialogsType = {
    dialogsPage: DialogsPageType

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
    ava:string
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


export type DialogsMessagesInType ={
    messagesIn: string
    ava: string
}

export type DialogsMessagesOutType ={
    messagesOut: string

}
export type AvatarDescriptionType={
    ava: string
}
export type ImgType={
    ava: string
}
export type PostAvatarType={
    ava: string
}
