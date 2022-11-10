import React from 'react';

type StatusPropsType = {
    status: string,
}

class ProfileStatus extends React.Component <StatusPropsType,{}> {
    state = {
        editMode: false
    }

    activatedEditMode ()  {
        this.setState({
            editMode: true
        })
    }

    deactivatedEditMode ()  {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
                <div>
                    {!this.state.editMode &&
                        <div>
                            <span onDoubleClick={this.activatedEditMode.bind(this)} >{this.props.status}</span>
                        </div>
                    }
                    {this.state.editMode &&
                        <div>
                            <input onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status}/>
                        </div>
                    }
                </div>
        );
    }
}

export default ProfileStatus;