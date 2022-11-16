import React from 'react'
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/dialogs-reducer";
import {useFormik} from "formik";



type DialogsPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

export function Dialogs(props: DialogsPropsType) {
    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)
    let messagesElements = state.messages.map(m => <Message key={m.id} message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                </div>
                <AddMessageForm sendMessage={props.sendMessage}/>
            </div>
        </div>
    )
}
type AddMessageTypeForm = {
    sendMessage: (newMessageBody: string) => void
}

const AddMessageForm = (props: AddMessageTypeForm) => {
    const formik = useFormik({
        initialValues: {
            newMessageBody: ''
        },

        onSubmit: values => {
            alert(JSON.stringify(values));
            props.sendMessage(values.newMessageBody)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div style={{display: "block"}}>
            <label style={{color: "gold"}} htmlFor="textarea">Write a message</label>
            <textarea
                name="newMessageBody"
                onChange={formik.handleChange}
                value={formik.values.newMessageBody}
                onBlur={formik.handleBlur}
            />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};
