import {UsersType} from '../Types/Types';
import React, {MouseEvent} from 'react';
import styles from './Users.module.css'
import {Button} from '../Button/Button';
import axios from 'axios';
import userPhoto from '../../assets/images/user.jpg'


class Users extends React.Component<UsersType> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return <div className={styles.users}>
            <div>
                {
                    pages.map(p => <span onClick={(e: MouseEvent<HTMLSpanElement>) => {
                        this.onPageChanged(p)
                    }} className={this.props.currentPage === p ? styles.selectedPage : ''}> {p} </span>)
                }

            </div>
            {this.props.users.map((u) => {
                const follow = () => {
                    this.props.follow(u.id)
                }
                const unfollow = () => {
                    this.props.unfollow(u.id)
                }

                return <div className={styles.user_block} key={u.id}>
                    <div>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <Button title={'follow'} callBack={unfollow}/>
                                : <Button title={'unfollow'} callBack={follow}/>
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <div>{u.name}</div>
                        </div>
                        <div>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </div>
                        <div>{u.status}</div>
                    </div>
                </div>
            })}
        </div>
    }
}

export default Users;