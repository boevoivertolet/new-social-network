import React from 'react';
import {ProfileClassContainerType, ProfileMapStateToPropsType} from '../Types/Types';
import {Profile} from './Profile';
import {addPost, likesCounter, setIsFetching, setUserProfile, updateNewPostText} from '../Reducers/profilePageReducer';
import {connect} from 'react-redux';

import {avatars} from '../Avatars/Avatars';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import axios from 'axios';


class ProfileClassContainer extends React.Component<ProfileClassContainerType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUserProfile(response.data)

        })

    }


    render() {
        return (
            <Profile updateNewPostText={this.props.updateNewPostText}
                     addPost={this.props.addPost}
                     newPostText={this.props.newPostText}
                     postsData={this.props.postsData}
                     likesCounter={this.props.likesCounter}
                     userProfile={this.props.userProfile}
                     />
        )
    }

}


export const mapStateToProps = (state: ReduxStoreType): ProfileMapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        // ava: state.profilePage.userProfile?.photos.large,// holder
        userProfile: state.profilePage.userProfile
    }
}


export const ProfileContainer = connect(mapStateToProps, {
    likesCounter,
    addPost,
    updateNewPostText,
    setIsFetching,
    setUserProfile
})(ProfileClassContainer);




