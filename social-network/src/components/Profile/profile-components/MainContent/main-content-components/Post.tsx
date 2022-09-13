import React from 'react';
import styles from './Post.module.css'
import {PostText} from './post-components/PostText';
import {PostAvatar} from './post-components/PostAvatar';
import {PostButton} from './post-components/PostButton';




export const Post = () => {
    return <div className={styles.post}>
        <PostAvatar/>
        <PostButton title={'like'}/>
        <PostText/>
    </div>
}

