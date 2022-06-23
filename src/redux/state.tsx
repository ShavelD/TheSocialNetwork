export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likesCount: 6},
                {id: 2, message: "It's my first post", likesCount: 10}
            ],
            newPostText: ''
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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 10
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber()  //
        }
    }
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType

export type AddPostActionType = {
    type: 'ADD-POST'
    newPostText: string
}

export type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type StoreType = {
    _state: RootPropsType,
    updateNewPostText: (newText: string) => void,
    _callSubscriber: () => void,
    subscribe: (callback: () => void) => void,
    getState: () => RootPropsType,
    addPost: () => void,
    dispatch: (action: ActionsTypes) => void
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
export type ProfilePageType = {
    posts: PostsType[]
    newPostText: string
}
export type DialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type SidebarType = {
    id: number
    name: string
}

export type RootPropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType[]
}

//
// window.store = store