import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}

export const ProfileStatus = (props: PropsType) => {

    const [title, setTitle] = useState<string>(props.status)
    const [editMode, setEditMode] = useState<boolean>(false)
    const onEditMode = () => setEditMode(true)

    const offEditMode = () => {
        props.updateUserStatus(title)
        setEditMode(false)
    }

    useEffect(() => {
        setTitle(props.status)
    }, [props.status])

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        <div>
            {editMode
                ? <input autoFocus onBlur={offEditMode} onChange={onChangeSetTitle} value={title}/>
                : <span onDoubleClick={onEditMode}>{title || 'no status'}</span>
            }
        </div>
    )
}


//
// class ProfileStatus extends React.Component <StatusPropsType,{}> {
//     state = {
//         editMode: false
//     }
//
//     activatedEditMode ()  {
//         this.setState({
//             editMode: true
//         })
//     }
//
//     deactivatedEditMode ()  {
//         this.setState({
//             editMode: false
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 {!this.state.editMode &&
//                     <div>
//                         <span onDoubleClick={this.activatedEditMode.bind(this)} >{this.props.status}</span>
//                     </div>
//                 }
//                 {this.state.editMode &&
//                     <div>
//                         <input onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status}/>
//                     </div>
//                 }
//             </div>
//         );
//     }
// }
//
// export default ProfileStatus;