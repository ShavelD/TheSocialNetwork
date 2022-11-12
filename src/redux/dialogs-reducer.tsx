import React from "react";
import {ActionsTypes} from "./types";
import {SendMessageActionType} from "./users-reducer";
import {UpdateNewMessageBodyActionType} from "./profile-reducer";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE'

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dima"},
        {id: 2, name: "Polina"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Sveta"},
        {id: 5, name: "Ann"},
        {id: 6, name: "Andrey"}
    ] as DialogsType[],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Hello"}
    ] as MessagesType[] ,
    newMessageBody: " "
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                newMessageBody: ' ',
                messages: [...state.messages, {id: 3, message: body}]
            }
        default:
            return state;
    }
}

export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBodyActionType => ({
    type: UPDATE_NEW_MESSAGE_BODY, body: body
})

export const SendMessageCreator = (newMessageBody: string): SendMessageActionType => ({
    type: SEND_MESSAGE, newMessageBody
})
export default dialogsReducer;