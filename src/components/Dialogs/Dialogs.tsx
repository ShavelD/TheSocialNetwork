import React, {ChangeEvent} from 'react'
import {NavLink} from 'react-router-dom'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { ActionsTypes,StoreType} from "../../redux/state";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";


type DialogsPropsType = {
    store: StoreType
    dispatch: (body: ActionsTypes) => void
}

export function Dialogs(props: DialogsPropsType) {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
      props.dispatch(SendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        let action = updateNewMessageBodyCreator(body)
        props.dispatch(action)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}