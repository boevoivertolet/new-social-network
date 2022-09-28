import React, {ChangeEvent, useState} from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from '../../../UniversalTextarea/UniversalTextarea';
import {NewPostType} from '../../../Types/Types';
import {addPostAC, updateNewPostTextAC} from '../../../Store/Store';

export const NewPosts = (props: NewPostType) => {



    const addPost = () => {
        props.dispatch(addPostAC())
    }

    const updateNewPostTex = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch(updateNewPostTextAC(text))
    }


    return <div className={styles.newPosts}>
        <div>
            <UniversalTextarea newText={props.newPostText} onChangeHandler={updateNewPostTex}/>
            <Button callBack={addPost} title={'add post'}/>
        </div>
    </div>
}
