import React from 'react';
import {Img} from './avatar-description-components/Img';
import {NameDescription} from './avatar-description-components/NameDescription';
import styles from './AvatarDescription.module.css'
import {AvatarDescriptionType} from '../../../Types/Types';
import {ProfileStatus} from './ProfileStatus';


export const AvatarDescription = (props: AvatarDescriptionType) => {
    return <div className={styles.avatarDescription}>
        <Img ava={props.userProfile.photos.large}/>
        <NameDescription
            key={props.userProfile.userId}
            userName={props.userProfile.fullName}
            lookingForAJobDescription={props.userProfile.lookingForAJobDescription}
            aboutMe={props.userProfile.aboutMe}
            contacts={props.userProfile.contacts}
            lookingForAJob={props.userProfile.lookingForAJob}
        />
        <ProfileStatus status={'hi'}/>
    </div>
}
