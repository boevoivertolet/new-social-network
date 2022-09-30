import React from 'react';
import {ProfileContainerType} from '../Types/Types';
import {Profile} from './Profile';
import {addPostAC, likesCounterAC, updateNewPostTextAC} from '../Reducers/profilePageReducer';

export const ProfileContainer = (props: ProfileContainerType) => {

    let ava = props.store.getState().profilePage.postsData[0].ava
    let newPostText = props.store.getState().profilePage.newPostText
    let postsData = props.store.getState().profilePage.postsData


    const likesCounter = () => {
        props.store.dispatch(likesCounterAC())
    }

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const updateNewPostText = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return <Profile
        postsData={postsData}
        likesCounter={likesCounter}
        newPostText={newPostText}
        ava={ava} addPost={addPost}
        updateNewPostText={updateNewPostText}
    />

}
