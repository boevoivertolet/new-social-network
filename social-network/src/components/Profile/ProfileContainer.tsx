import React, {ComponentType} from 'react';
import {ProfileContainerType, ProfileMapStateToPropsType} from '../Types/Types';
import {Profile} from './Profile';
import {addPost, likesCounter, setIsFetching, setUserProfile, updateNewPostText} from '../Reducers/profilePageReducer';
import {connect} from 'react-redux';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import axios from 'axios';
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from 'react-router-dom';
import {getProfile} from '../../api/api';


class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        // let userId = this.props.router.params.userId;
        // if (!userId) userId = 2;
        getProfile(this.props.router.params.userId).then(data => {
            this.props.setIsFetching(false)
            this.props.setUserProfile(data)
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
        userProfile: state.profilePage.userProfile

    }
}

type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>

function withRouter<T>(Component:ComponentType<T>) {
    function ComponentWithRouterProp(props: T & WithRouterType ) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return <Component {...props} router={{ location, navigate, params }} />;
    }
    return ComponentWithRouterProp;
}


export default connect(mapStateToProps, {
    likesCounter,
    addPost,
    updateNewPostText,
    setIsFetching,
    setUserProfile
})(withRouter(ProfileContainer));




