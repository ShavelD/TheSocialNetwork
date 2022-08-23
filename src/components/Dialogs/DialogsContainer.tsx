import React from 'react'
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () =>  void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)