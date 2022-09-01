import {
    FollowActionType,
    SendMessageActionType,
    setCurrentActionType, setTotalCountActionType,
    setUsersActionType,
    unFollowActionType
} from "./users-reducer";
import {AddPostActionType, UpdateNewMessageBodyActionType, UpdateNewPostTextActionType} from "./profile-reducer";

export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentActionType
    | setTotalCountActionType