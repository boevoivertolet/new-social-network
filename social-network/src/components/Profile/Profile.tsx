import React from 'react';
import {WallImg} from './profile-components/WallImg/WallImg';
import {AvatarDescription} from './profile-components/AvatarDescription/AvatarDescription';
import styles from './Profile.module.css'
import {PostsHeader} from './profile-components/PostsHeader/PostsHeader';
import {ProfileType} from '../Types/Types';
import {NewPosts} from './profile-components/NewPosts/NewPosts';
import {MainContent} from './profile-components/MainContent/MainContent';
import {Preloader} from '../Preloader/Preloader';
import {Navigate} from 'react-router-dom';


export const Profile = (props: ProfileType) => {
    if (!props.userProfile) {
        return <Preloader/>

    }
    if (props.isAuth === false) return <Navigate to ={'/login'}/>;
    return <div className={styles.profile}>
        <WallImg/>
        <AvatarDescription userProfile={props.userProfile}/>
        <PostsHeader/>
        <NewPosts updateNewPost={props.updateNewPostText} addPost={props.addPost} newPostText={props.newPostText}/>
        <MainContent postsData={props.postsData} likesCounter={props.likesCounter}/>
    </div>


}
