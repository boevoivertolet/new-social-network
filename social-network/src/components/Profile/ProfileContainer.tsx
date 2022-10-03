import React from 'react';
import {ProfileContainerType, StoreType} from '../Types/Types';
import {Profile} from './Profile';
import {addPostAC, likesCounterAC, updateNewPostTextAC} from '../Reducers/profilePageReducer';
import StoreContext from '../../StoreContext';

export const ProfileContainer = (props: ProfileContainerType) => {
    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {

                    let ava = store.getState().profilePage.postsData[0].ava
                    let newPostText = store.getState().profilePage.newPostText
                    let postsData = store.getState().profilePage.postsData


                    const likesCounter = () => {
                        store.dispatch(likesCounterAC())
                    }

                    const addPost = () => {
                        store.dispatch(addPostAC())
                    }
                    const updateNewPostText = (text: string) => {
                        store.dispatch(updateNewPostTextAC(text))
                    }

                    return <Profile
                        postsData={postsData}
                        likesCounter={likesCounter}
                        newPostText={newPostText}
                        ava={ava} addPost={addPost}
                        updateNewPostText={updateNewPostText}
                    />
                }


            }


        </StoreContext.Consumer>
    )




}
