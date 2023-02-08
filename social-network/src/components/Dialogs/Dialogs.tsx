import React from 'react'
import { DialogsType } from '../Types/Types'
import styles from './Dialogs.module.css'
import { DialogsMessages } from './dialogs-components/DialogsMessages/DialogsMessages'
import { DialogsNames } from './dialogs-components/DialogsNames/DialogsNames'
import { DialogsHeader } from './dialogs-components/DialogsHeader/DialogsHeader'
import {
	AddMEssageFormDataType,
	AddMEssageFormRedux
} from './dialogs-components/AddMessageForm'

export const Dialogs = (props: DialogsType) => {
	const addNewMess = (values: AddMEssageFormDataType) => {
		props.addMessage(values.newMEssageBody)
	}

	let dialogsData = props.dialogsPage.dialogsData

	let dialogName = dialogsData.map((dialog) => (
		<DialogsNames
			key={dialog.id}
			name={dialog.name}
			id={dialog.id}
			ava={dialog.ava}
		/>
	))

	return (
		<div className={styles.dialogs}>
			<div>
				<DialogsHeader title={'Dialogs'} />
				{dialogName}
			</div>

			<div>
				<DialogsHeader title={'Messages'} />

				<DialogsMessages dialogsPage={props.dialogsPage} />
			</div>
			<div className={styles.textarea}>
				<AddMEssageFormRedux onSubmit={addNewMess} />
			</div>
		</div>
	)
}
