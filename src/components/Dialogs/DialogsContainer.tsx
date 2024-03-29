import React from 'react'
import {SendMessageCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapDispatchPropsType = {
    sendMessage: (newMessageBody: string) =>  void
}

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(SendMessageCreator(newMessageBody))
        }
    }
}

// compose(
//     connect(mapStateToProps, mapDispatchToProps),
//     withAuthRedirect
// ) (Dialogs)
//
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
        withAuthRedirect
) (Dialogs);