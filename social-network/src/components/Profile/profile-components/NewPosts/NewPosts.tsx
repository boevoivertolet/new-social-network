import React, {ChangeEvent} from 'react';
import styles from './NewPosts.module.css'
import {Button} from '../../../Button/Button';
import {UniversalTextarea} from '../../../UniversalTextarea/UniversalTextarea';
import {NewPostType} from '../../../Types/Types';
import { AddMEssageFormDataType, AddMEssageFormRedux } from '../../../Dialogs/dialogs-components/AddMessageForm';



export const NewPosts = (props: NewPostType) => {


    const addPost = (values: AddMEssageFormDataType) => {
        console.log('profile add post :', values.newMEssageBody);
        console.log(values);

        if(values.newMEssageBody){
            props.addPost(values.newMEssageBody)
        }
    }


    return <div className={styles.newPosts}>
        <div>

            <AddMEssageFormRedux onSubmit={addPost}/>
        </div>
    </div>
}
