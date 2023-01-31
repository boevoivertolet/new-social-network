import React from 'react';
import styles from './AvatarDescription.module.css'

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
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

    }

    render() {

        return <div className={styles.profileStatus}>
            {!this.state.editMode &&
                <div>
                    status: <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    status: <input autoFocus onBlur={this.deActivateEditMode} value={this.props.status}/>
                </div>

            }


        </div>
    }
}


type ProfileStatusPropsType = {
    status: string
}