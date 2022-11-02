import React, {ComponentType} from 'react';
import {ProfileContainerType, ProfileMapStateToPropsType} from '../Types/Types';
import {Profile} from './Profile';
import {
    addPost,
    getUserProfile,
    likesCounter,
    setIsFetching,
    updateNewPostText
} from '../Reducers/profilePageReducer';
import {connect} from 'react-redux';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import {NavigateFunction, Params, useLocation, useNavigate, useParams} from 'react-router-dom';



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
    getUserProfile
})(withRouter(ProfileContainer));




