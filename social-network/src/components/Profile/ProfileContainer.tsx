import React from 'react';
import {ProfileContainerType, ProfileMapStateToPropsType} from '../Types/Types';
import {Profile} from './Profile';
import {addPost, getUserProfile, likesCounter, updateNewPostText} from '../Reducers/profilePageReducer';
import {connect} from 'react-redux';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import {withAuthRedirect} from '../../hoc/WithAuthRedirect';
import {withRouter} from '../../hoc/WithRouter';
import {compose} from 'redux';


class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        let userId = this.props.router.params.userId
        this.props.getUserProfile(userId)

    }


    render() {

        return (
            <Profile updateNewPostText={this.props.updateNewPostText}
                     addPost={this.props.addPost}
                     newPostText={this.props.newPostText}
                     postsData={this.props.postsData}
                     likesCounter={this.props.likesCounter}
                     userProfile={this.props.userProfile}
                     isAuth={this.props.isAuth}

            />
        )
    }

}


const mapStateToProps = (state: ReduxStoreType): ProfileMapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
        userProfile: state.profilePage.userProfile


    }
}



export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        likesCounter,
        addPost,
        updateNewPostText,
        getUserProfile
    }),
    withRouter,
  /*  withAuthRedirect,*/
)(ProfileContainer)




