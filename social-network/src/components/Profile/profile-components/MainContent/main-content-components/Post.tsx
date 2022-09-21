import React from 'react';
import styles from './Post.module.css'
import {PostMessage} from './post-components/PostMessage/PostMessage';
import {PostAvatar} from './post-components/PostAvatar/PostAvatar';
import {Button} from '../../../../Button/Button';
import {PostLikesCount} from './post-components/PostLikesCount/PostLikesCount';
import {PostType} from '../../../../Types/Types';


export const Post = (props: PostType) => {
    return <div className={styles.post}>
        <PostAvatar ava={props.postsData.ava}/>
        <PostMessage postMessage={props.postsData.message }/>
        <div className={styles.button_likes_count}>
            {/*<Button title={'like'}/>*/}
            <PostLikesCount likesCount={props.postsData.likesCount}/>
        </div>

    </div>
}

