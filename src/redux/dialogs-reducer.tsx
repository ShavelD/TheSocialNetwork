import React from "react";
import {ActionsTypes, DialogsPageType, SendMessageActionType, UpdateNewMessageBodyActionType} from "./state";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE'

 const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {
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