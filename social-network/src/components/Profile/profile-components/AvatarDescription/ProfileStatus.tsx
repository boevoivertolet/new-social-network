import React from 'react';

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }
    activateEditMode = () => {
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

        return <>
            {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
            }
            {this.state.editMode &&
                <div>
                    <input autoFocus onBlur={this.deActivateEditMode.bind(this)} value={this.props.status}/>
                </div>

            }


        </>
    }
}


type ProfileStatusPropsType = {
    status: string
}