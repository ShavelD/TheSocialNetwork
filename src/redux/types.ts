import {FollowActionType, SendMessageActionType, setUsersActionType, unFollowActionType} from "./users-reducer";
import {AddPostActionType, UpdateNewMessageBodyActionType, UpdateNewPostTextActionType} from "./profile-reducer";

export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | unFollowActionType
    | setUsersActionType