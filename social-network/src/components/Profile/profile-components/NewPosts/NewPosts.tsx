import React, {ChangeEvent, useState} from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from './newpost-components/UniversalTextarea';
import {NewPostType} from '../../../Types/Types';

export const NewPosts = (props: NewPostType) => {

    let [textareaMessage, setTextareaMessage] = useState('')

    const onChange = (textareaMessage: string) => {
        setTextareaMessage(textareaMessage);

    }

    const addPost = () => {
        props.addPost(textareaMessage)
    }

    return <div className={styles.newPosts}>
        <div>
            <UniversalTextarea textareaMessage={textareaMessage} onChange={onChange}/>
            <Button  callBack={addPost} title={'send'}/>
        </div>
    </div>
}

