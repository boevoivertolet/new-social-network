import React, {ChangeEvent} from 'react';
import styles from './AvatarDescription.module.css'

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        console.log('this:', this)
        this.setState({
            editMode: true
        });

    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateStatus(this.state.status)
        console.log(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        console.log('componentDidUpdate')
    }

    render() {

        return <div className={styles.profileStatus}>
            {!this.state.editMode &&
                <div>
                    status: <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    status: <input onChange={this.onStatusChange} autoFocus onBlur={this.deActivateEditMode}
                                   value={this.state.status}/>
                </div>

            }


        </div>
    }
}


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}