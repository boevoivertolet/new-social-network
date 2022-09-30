import React from 'react';
import {WallImg} from './profile-components/WallImg/WallImg';
import {AvatarDescription} from './profile-components/AvatarDescription/AvatarDescription';
import {NewPosts} from './profile-components/NewPosts/NewPosts';
import {MainContent} from './profile-components/MainContent/MainContent';
import styles from './Profile.module.css'
import {PostsHeader} from './profile-components/PostsHeader/PostsHeader';
import {ProfileType} from '../Types/Types';
import {NewPostsContainer} from './profile-components/NewPosts/NewPostsContainer';

export const Profile = (props: ProfileType) => {
    let state = props.store.getState()

    return <div className={styles.profile}>
        <WallImg/>
        <AvatarDescription ava={state.profilePage.postsData[0].ava}/>
        <PostsHeader/>
        <NewPostsContainer store={props.store}/>
        <MainContent dispatch={props.store.dispatch.bind(props.store)}  postsData={state.profilePage.postsData}/>
    </div>



}
