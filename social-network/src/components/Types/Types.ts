export type ButtonType = {
    title: string
}
export type PostMessageType = {
    postMessage: string
}
export type PostLikesCountType = {
    likesCount: string
}

export type AppType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    postData: PostDataType[]
}
export type DialogsDataType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    message: string
}
export type PostDataType = {
    id: string
    message: string
    likesCount: string
}
export type DialogsType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
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
    postData:PostDataType[]
}
export type MainContentType={
    postData:PostDataType[]
}
export type PostType = {
    postData:PostDataType
}


