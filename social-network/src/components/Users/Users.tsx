import styles from './Users.module.css';
import React, {MouseEvent} from 'react';
import userPhoto from '../../assets/images/user.jpg';
import {Button} from '../Button/Button';
import {UsersType} from '../Types/Types';
import {NavLink} from 'react-router-dom';
import {follow} from '../Reducers/usersReducer';


export const Users = (props: UsersType) => {
    const pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div className={styles.users}>
        <div className={styles.pageNumbers}>
            {
                pages.map(p => <span key={p} onClick={(e: MouseEvent<HTMLSpanElement>) => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p ? styles.selectedPage : ''}>{p} </span>)
            }

        </div>
        {props.users.map((u) => {
            /*            const follow = () => {
                            props.setIsFollowingProgress(true, u.id)
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                withCredentials: true,
                                headers: {'API-KEY': 'b9a47b16-0cbb-4fe2-8152-303706b5e3c1'}
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.follow(u.id)
                                }
                                props.setIsFollowingProgress(false, u.id)

                            })

                        }

                        const unfollow = () => {
                            props.setIsFollowingProgress(true, u.id)
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {'API-KEY': 'b9a47b16-0cbb-4fe2-8152-303706b5e3c1'}
                            }).then(response => {
                                if (response.data.resultCode === 0) {
                                    props.unfollow(u.id)
                                }
                                props.setIsFollowingProgress(false, u.id)

                            })
                        }*/

            const follow = () => {
          /*      props.setIsFollowingProgress(true, u.id)
                usersAPI.postFollow(u.id).then(data => {
                    if (data.resultCode === 0) {
                        props.acceptFollow(u.id)
                    }
                    props.setIsFollowingProgress(false, u.id)
                })*/
                props.follow(u.id);
            }

            const unfollow = () => {
                // props.setIsFollowingProgress(true, u.id)
                // usersAPI.deleteFollow(u.id).then(data => {
                //     if (data.resultCode === 0) {
                //         props.acceptUnfollow(u.id)
                //     }
                //     props.setIsFollowingProgress(false, u.id)
                // })
                props.unFollow(u.id);
            }

            return <div className={styles.user_block} key={u.id}>
                <div>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <Button disabled={props.followingInProgress.some(id => id === u.id)} title={'unfollow'}
                                      callBack={unfollow}/>
                            : <Button disabled={props.followingInProgress.some(id => id === u.id)} title={'follow'}
                                      callBack={follow}/>
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