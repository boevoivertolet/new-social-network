import React from 'react';
import {UsersClassContainerType, UsersMapStateToPropsType,} from '../Types/Types';
import {
    acceptFollow, getUsers,
    setCurrentPage,
    setIsFollowingProgress,
    acceptUnfollow, follow, unFollow
} from '../Reducers/usersReducer';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import {connect} from 'react-redux';
import {Users} from './Users';
import {Preloader} from '../Preloader/Preloader';


class UsersClassContainer extends React.Component<UsersClassContainerType> {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
        // this.props.setCurrentPage(pageNumber);
        // this.props.setIsFetching(true)
        // usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
        //     this.props.setIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                onPageChanged={this.onPageChanged}
                /* users={this.props.users}
                 setUsers={this.props.setUsers}
                 currentPage={this.props.currentPage}
                 pageSize={this.props.pageSize}
                 follow={this.props.follow}
                 setCurrentPage={this.props.setCurrentPage}
                 setTotalUsersCount={this.props.setTotalUsersCount}
                 totalCount={this.props.totalCount}
                 unfollow={this.props.unfollow}
                 setIsFollowingProgress={this.props.setIsFollowingProgress}
                 followingInProgress={this.props.followingInProgress}*/
                {...this.props}
            />


        </>
    }
}


const mapStateToProps = (state: ReduxStoreType): UsersMapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalCount: state.users.totalCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: state.users.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    //setUsers,
    setCurrentPage,
    // setTotalUsersCount,
    // setIsFetching,
    setIsFollowingProgress,
    getUsers
})(UsersClassContainer);


