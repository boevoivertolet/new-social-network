import React from 'react';
import styles from './PostAvatar.module.css'
import {PostAvatarType} from '../../../../../../Types/Types';

export const PostAvatar = (props: PostAvatarType) => {
    return <img className={styles.img}
        src={props.ava}
        alt="ava"/>
}