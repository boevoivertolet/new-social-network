import React, {ChangeEvent, useState} from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from '../../../UniversalTextarea/UniversalTextarea';
import {NewPostType} from '../../../Types/Types';

export const NewPosts = (props: NewPostType) => {


    let addPostAC = () => {
        return {
            type: 'ADD-POST'
        } as const
    }
    const addPost = () => {
        props.dispatch(addPostAC())

    }

    let updateNewPostTexAC = (text:string) => {
        return {
            type: 'UPDATE-NEW-POST-TEXT', newPostText: text
        }
    }
    const updateNewPostTex = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch(updateNewPostTexAC(text))
    }


    return <div className={styles.newPosts}>
        <div>
            <UniversalTextarea newPostText={props.newPostText} onChangeHandler={updateNewPostTex}/>
            <Button callBack={addPost} title={'add post'}/>
        </div>
    </div>
}

