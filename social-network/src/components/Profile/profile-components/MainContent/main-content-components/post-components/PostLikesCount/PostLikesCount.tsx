import React from 'react';
import styles from './PostLikesCount.module.css'
import {PostLikesCountType} from '../../../../../../Types/Types';




export const PostLikesCount = (props:PostLikesCountType) => {
    return <span className={styles.likes_count}>{props.likesCount}</span>
}