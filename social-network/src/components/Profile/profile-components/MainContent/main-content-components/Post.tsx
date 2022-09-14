import React from 'react';
import styles from './Post.module.css'
import {PostMessage} from './post-components/PostMessage/PostMessage';
import {PostAvatar} from './post-components/PostAvatar/PostAvatar';
import {Button} from '../../../../Button/Button';
import {PostLikesCount} from './post-components/PostLikesCount/PostLikesCount';


export const Post = () => {
    return <div className={styles.post}>
        <PostAvatar/>
        <PostMessage postMessage={'postMessage '}/>
        <div className={styles.button_likes_count}>
            <Button title={'like'}/>
            <PostLikesCount likesCount={'0'}/>
        </div>

    </div>
}

