import profileReducer, {ADD_POST, UPDATE_NEW_POST_TEXT} from "./profile-reducer";
import dialogsReducer, {SEND_MESSAGE, UPDATE_NEW_MESSAGE_BODY} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 6},
                {id: 2, message: "It's my first post", likesCount: 10}
            ],
            newPostText: ''
        },
        usersPage: {
            users: [
                {id: 1, photoUrl: "", followed: false,fullName: "Dmitry Sh",status: "I am a boss",location: {city: "Minsk", country: "Belarus"}},
        { id: 1, photoUrl: "", followed: true,fullName: "Alex Sm",status: "I am a boss",location: {city: "Moscow", country: "Russian"}},
                {id: 1,  photoUrl: "", followed: false,fullName: "Andrey Sh",status: "I am a boss",location: {city: "London", country: "England"}},
            ]
        },
        dialogsPage: {
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
        },
        sidebar: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Polina"},
            {id: 3, name: "Andrew"}
        ]
    },
    _callSubscriber() {
        console.log('state is change')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._callSubscriber = callback //
    },
    addPost() {
        let newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 10
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber()   //
    },
    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber()  //
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    }
}

export type ActionsTypes = AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | FollowActionType
    | unFollowActionType
    | setUsersActionType

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type UpdateNewMessageBodyActionType = {
    type: 'UPDATE-NEW-MESSAGE-BODY'
    body: string
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
}

export type FollowActionType = {
    type: 'FOLLOW',
    userId: number
}

export type unFollowActionType = {
    type: 'UNFOLLOW',
    userId: number
}

export type setUsersActionType = {
    type: 'SET-USERS',
    users: UsersType[]
}


export type StoreType = {
    _state: RootPropsType,
    updateNewPostText: (newText: string) => void,
    _callSubscriber: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootPropsType,
    addPost: () => void,
    dispatch: (action: ActionsTypes) => void
    // newPostText: string
}

export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    message: string

}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    fullName: string
    status: string
    location: {
        city: string,
        country: string
    }
}

export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}

export type UsersPageType = {
    users: UsersType[]
}

export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

export type SidebarType = {
    id: number
    name: string
}

export type RootPropsType = {
    profilePage: ProfilePageType
    usersPage: UsersPageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType[]
}

//
// window.store = store