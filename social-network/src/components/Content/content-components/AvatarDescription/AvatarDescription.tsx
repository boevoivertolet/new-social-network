import React from 'react';
import {Img} from './avatar-description-components/Img';
import {NameDescription} from './avatar-description-components/NameDescription';
import styles from'./AvatarDescription.module.css'


export const AvatarDescription = () => {
    return <div className={styles.avatarDescription}>
        <Img/>
        <NameDescription/>
    </div>
}
