import React, {ChangeEvent, useState} from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from '../../../UniversalTextarea/UniversalTextarea';
import {NewPostType} from '../../../Types/Types';

export const NewPosts = (props: NewPostType) => {



    const addPost = () => {
        // props.addPost(props.newPostText)
        props.dispatch({type:'ADD-POST'})

    }
    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type:'UPDATE-NEW-POST-TEXT',newPostText: event.currentTarget.value})

    }


    return <div className={styles.newPosts}>
        <div>
            <UniversalTextarea newPostText={props.newPostText} onChangeHandler={onChangeHandler}/>
            <Button  callBack={addPost} title={'add post'}/>
        </div>
    </div>
}

