import React from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from './newpost-components/UniversalTextarea';
import {NewPostType} from '../../../Types/Types';

export const NewPosts = (props: NewPostType) => {




    return <div className={styles.newPosts}>
        <div>
            <UniversalTextarea/>
            <Button  title={'send'}/>
        </div>
    </div>
}

