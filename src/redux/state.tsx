import {rerenderEntireTree} from "../render";

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

let state: RootPropsType = {
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
}


export let addPost = () => {
    let newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 10
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;