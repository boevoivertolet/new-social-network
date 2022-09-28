import React from 'react';
import styles from './Post.module.css'
import {PostMessage} from './post-components/PostMessage/PostMessage';
import {PostAvatar} from './post-components/PostAvatar/PostAvatar';
import {Button} from '../../../../Button/Button';
import {PostLikesCount} from './post-components/PostLikesCount/PostLikesCount';
import {PostType} from '../../../../Types/Types';
import {likesCounterAC} from '../../../../Reducers/profilePageReducer';


export const Post = (props: PostType) => {

    const likesCounter = () => {
        props.dispatch(likesCounterAC())
    }

    return <div className={styles.post}>
        <PostAvatar ava={props.postsData.ava}/>
        <PostMessage postMessage={props.postsData.message}/>
        <div className={styles.button_likes_count}>
            <Button callBack={likesCounter} title={'like'}/>
            <PostLikesCount likesCount={props.postsData.likesCount}/>
        </div>

    </div>
}

