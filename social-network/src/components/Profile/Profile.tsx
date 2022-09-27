import React from 'react';
import {WallImg} from './profile-components/WallImg/WallImg';
import {AvatarDescription} from './profile-components/AvatarDescription/AvatarDescription';
import {NewPosts} from './profile-components/NewPosts/NewPosts';
import {MainContent} from './profile-components/MainContent/MainContent';
import styles from './Profile.module.css'
import {PostsHeader} from './profile-components/PostsHeader/PostsHeader';
import {ProfileType} from '../Types/Types';

export const Profile = (props: ProfileType) => {
    return <div className={styles.profile}>
        <WallImg/>
        <AvatarDescription ava={props.store.getState().profilePage.postsData[0].ava}/>
        <PostsHeader/>
        <NewPosts newPostText={props.store.getState().profilePage.newPostText}  updateNewPostText={props.store.updateNewPostText.bind(props.store)}  addPost={props.store.addPost.bind(props.store)} />
        <MainContent likesCounter={props.store.likesCounter.bind(props.store)}  postsData={props.store.getState().profilePage.postsData}/>
    </div>



}
