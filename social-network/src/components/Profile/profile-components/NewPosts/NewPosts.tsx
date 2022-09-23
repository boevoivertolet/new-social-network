import React, {ChangeEvent, useState} from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from '../../../UniversalTextarea/UniversalTextarea';
import {NewPostType} from '../../../Types/Types';

export const NewPosts = (props: NewPostType) => {



    const addPost = () => {
        props.addPost(props.newPostText)
        props.updateNewPostText('')
    }

    return <div className={styles.newPosts}>
        <div>
            <UniversalTextarea newPostText={props.newPostText} onChange={props.updateNewPostText}/>
            <Button  callBack={addPost} title={'send'}/>
        </div>
    </div>
}

