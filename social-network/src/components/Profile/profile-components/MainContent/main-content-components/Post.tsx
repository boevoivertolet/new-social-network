import React from 'react';
import styles from './Post.module.css'
import {PostMessage} from './post-components/PostMessage';
import {PostAvatar} from './post-components/PostAvatar';
import {Button} from '../../../../Button/Button';




export const Post = () => {
    return <div className={styles.post}>
        <PostAvatar/>
        <PostMessage postMessage={'postMessage'}/>
        <Button title={'like'}/>
        <span>likes count</span>
    </div>
}

