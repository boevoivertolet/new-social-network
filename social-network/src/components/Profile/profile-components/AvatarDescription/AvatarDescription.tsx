import React from 'react';
import {Img} from './avatar-description-components/Img';
import {NameDescription} from './avatar-description-components/NameDescription';
import styles from './AvatarDescription.module.css'
import {AvatarDescriptionType} from '../../../Types/Types';


export const AvatarDescription = (props: AvatarDescriptionType) => {
    return <div className={styles.avatarDescription}>
        <Img ava={props.ava}/>
        <NameDescription/>
    </div>
}
