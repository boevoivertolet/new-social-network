import React, {ChangeEvent} from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from '../../../UniversalTextarea/UniversalTextarea';
import {NewPostContainerType, NewPostType} from '../../../Types/Types';
import {addPostAC, updateNewPostTextAC} from '../../../Reducers/profilePageReducer';
import {NewPosts} from './NewPosts';


export const NewPostsContainer = (props: NewPostContainerType) => {


    const addPost = () => {
        props.store.dispatch(addPostAC())
    }
    const updateNewPostTex = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }


    return <NewPosts updateNewPost={updateNewPostTex}  addPost={addPost} newPostText={props.store.getState().profilePage.newPostText} />
}
