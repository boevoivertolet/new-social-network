import {UsersType} from '../components/Types/Types';
import React from 'react';
import styles from './Users.module.css'
import {Button} from '../components/Button/Button';

export const Users = (props: UsersType) => {
    return <div className={styles.users}>
        {props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.avaLink}/>
                </div>
            </span>
            <span>
                <div>
                    <Button title={'follow'} callBack={()=> { alert('follow')}}/>
                </div>
            </span>
        </div>)}
    </div>
}