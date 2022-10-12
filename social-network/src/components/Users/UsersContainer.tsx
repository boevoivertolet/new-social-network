import React from 'react';
import {UsersClassContainerType, UsersMapDispatchToPropsType, UsersMapStateToPropsType,} from '../Types/Types';
import {Dispatch} from 'redux';
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow
} from '../Reducers/usersReducer';
import {ReduxStoreType} from '../ReduxStore/ReduxStore';
import {connect} from 'react-redux';
import axios from 'axios';
import {Users} from './Users';
import {Preloader} from './Preloader';


class UsersClassContainer extends React.Component<UsersClassContainerType> {


    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <>
            <Users
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                setUsers={this.props.setUsers}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                follow={this.props.follow}
                setCurrentPage={this.props.setCurrentPage}
                setTotalUsersCount={this.props.setTotalUsersCount}
                totalUsersCount={this.props.totalUsersCount}
                unfollow={this.props.unfollow}
            />
            {this.props.isFetching ? <Preloader/> : null}


        </>
    }
}


const mapStateToProps = (state: ReduxStoreType): UsersMapStateToPropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching


    }
}
// const mapDispatchToProps = (dispatch: Dispatch): UsersMapDispatchToPropsType => {
//     return {
//         follow: (usersId: string) => {
//             dispatch(followAC(usersId))
//         },
//         unfollow: (usersId: string) => {
//             dispatch(unfollowAC(usersId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         setFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
//
// }


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching
})(UsersClassContainer);


