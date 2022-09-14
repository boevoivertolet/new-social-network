import React from 'react';
import {PostMessageType} from '../../../../../../Types/Types';
import styles from './PostMessage.module.css'

export const PostMessage = (props: PostMessageType) => {
    return <div className={styles.post_message}> {props.postMessage} </div>
}