import React from 'react';
import {DialogsType} from '../Types/Types';
import styles from './Dialogs.module.css'
import {DialogsMessages} from './dialogs-components/DialogsMessages/DialogsMessages';
import {DialogsNames} from './dialogs-components/DialogsNames/DialogsNames';
import {DialogsHeader} from './dialogs-components/DialogsHeader/DialogsHeader';
import {UniversalTextarea} from '../Profile/profile-components/NewPosts/newpost-components/UniversalTextarea';
import {Button} from '../Button/Button';


export const Dialogs = (props: DialogsType) => {

    let dialogName = props.dialogsPage.dialogsData.map(dialog => <DialogsNames key={dialog.id} name={dialog.name}
                                                                               id={dialog.id} ava={dialog.ava}/>);





    return <div className={styles.dialogs}>
        <div>
            <DialogsHeader title={'Dialogs'}/>
            {dialogName}
        </div>

        <div>
            <DialogsHeader title={'Messages'}/>

            <DialogsMessages dialogsPage={props.dialogsPage}/>
        </div>
        <div className={styles.textarea}>

            {/*<UniversalTextarea  />*/}
            {/*<Button   title={'send'}/>*/}

        </div>

    </div>
}

