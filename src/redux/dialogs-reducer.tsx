import React from "react";
import {ActionsTypes, DialogsPageType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./store";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Polina"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Ann"},
        {id: 6, name: "Andrey"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Hello"}
    ],
    newMessageBody: " "
}

 const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
     switch (action.type) {
         case UPDATE_NEW_MESSAGE_BODY:
             state.newMessageBody = action.body
             return state;
         case SEND_MESSAGE:
             let body = state.newMessageBody
             state.newMessageBody = ' ';
             state.messages.push({id: 3, message: body});
             return state;
         default:
             return state;
     }
 }

export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export const SendMessageCreator = (): SendMessageActionType => ({
    type: SEND_MESSAGE
})
export default dialogsReducer;