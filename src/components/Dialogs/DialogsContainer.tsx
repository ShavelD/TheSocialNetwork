import React from 'react'
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes, RootPropsType} from "../../redux/store";



// export function DialogsContainer() {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().dialogsPage
//
//                 let onSendMessageClick = () => {
//                     store.dispatch(SendMessageCreator())
//                 }
//                 let onNewMessageChange = (body: string) => {
//                     let action = updateNewMessageBodyCreator(body)
//                     store.dispatch(action)
//                 }
//                 return <Dialogs updateNewMessageBody={onNewMessageChange}
//                                 sendMessage={onSendMessageClick}
//                                 dialogsPage={state}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state: RootPropsType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)