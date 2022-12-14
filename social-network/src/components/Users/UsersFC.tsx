// @ts-ignore
import {UsersType} from '../Types/Types';
import React from 'react';
import styles from './Users.module.css'
import {Button} from '../Button/Button';
import axios from 'axios';
import userPhoto from'../../assets/images/user.jpg'

const UsersFC = (props: UsersType) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                // @ts-ignore
                props.setUsers(response.data.items)
            })
        }
    }




    return <div className={styles.users}>
        <button onClick={getUsers}>Get Users</button>
        {props.users.map((u) => {
            const follow = () => {
                props.follow(u.id)
            }
            const unfollow = () => {
                // @ts-ignore
                props.unfollow(u.id)
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