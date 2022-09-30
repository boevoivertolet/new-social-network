import React from 'react';
import {WallImg} from './profile-components/WallImg/WallImg';
import {AvatarDescription} from './profile-components/AvatarDescription/AvatarDescription';
import styles from './Profile.module.css'
import {PostsHeader} from './profile-components/PostsHeader/PostsHeader';
import {ProfileType} from '../Types/Types';
import {NewPostsContainer} from './profile-components/NewPosts/NewPostsContainer';
import {MainContentContainer} from './profile-components/MainContent/MainContentContainer';

export const Profile = (props: ProfileType) => {
    let state = props.store.getState()

    return <div className={styles.profile}>
        <WallImg/>
        <AvatarDescription ava={state.profilePage.postsData[0].ava}/>
        <PostsHeader/>
        <NewPostsContainer store={props.store}/>
        <MainContentContainer store={props.store}/>
    </div>



}
