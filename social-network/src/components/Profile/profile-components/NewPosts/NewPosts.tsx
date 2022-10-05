import React, {ChangeEvent} from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from '../../../UniversalTextarea/UniversalTextarea';
import {NewPostType} from '../../../Types/Types';



export const NewPosts = (props: NewPostType) => {


    const addPost = () => {
        if(props.newPostText){
            props.addPost()
        }
    }
    const updateNewPostTex = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.updateNewPost(text)
    }


    return <div className={styles.newPosts}>
        <div>
            <UniversalTextarea newText={props.newPostText} onChangeHandler={updateNewPostTex}/>
            <Button callBack={addPost} title={'add post'}/>
        </div>
    </div>
}
