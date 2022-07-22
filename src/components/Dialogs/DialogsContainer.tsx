import React, {ChangeEvent} from 'react'
import {StoreType} from "../../redux/store";
import {SendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import store from "../../redux/redux-store";
import {StoreContext} from "../../StoreContext";
import {AddPostCreator, updateNewPostTextCreator} from "../../redux/profile-reducer";
import {MyPosts} from "../Profile/MyPosts/MyPosts";


export function DialogsContainer() {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState().dialogsPage

                let onSendMessageClick = () => {
                    store.dispatch(SendMessageCreator())
                }
                let onNewMessageChange = (body: string) => {
                    let action = updateNewMessageBodyCreator(body)
                    store.dispatch(action)
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick}
                                dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}