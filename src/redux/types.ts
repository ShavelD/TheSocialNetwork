import {
    FollowActionType,
    SendMessageActionType,
    setCurrentActionType, setIsFetchingActionType, setTotalCountActionType,
    setUsersActionType,
    unFollowActionType
} from "./users-reducer";
import {
    AddPostActionType,
    SetUserProfileActionType,
    UpdateNewMessageBodyActionType,
    UpdateNewPostTextActionType
} from "./profile-reducer";

export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | unFollowActionType
    | setUsersActionType
    | setCurrentActionType
    | setTotalCountActionType
    | setIsFetchingActionType
    | SetUserProfileActionType