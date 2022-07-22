import React from "react";
import {ActionsTypes, PostsType, StoreType,} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {AddPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import store from "../../../redux/redux-store";
import {StoreContext} from "../../../StoreContext";


export function MyPostsContainer() {
    // let state = store.getState()


    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState()

                let onAddPost = () => {
                    let action = AddPostCreator(state.profilePage.newPostText) ///
                    store.dispatch(action)
                }

                let onPostChange = (text: string) => {
                    let action = updateNewPostTextCreator(text)
                    store.dispatch(action)
                }

                return < MyPosts
                    updateNewPostText={onPostChange}
                    addPost={onAddPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}
                />
            }}
        </StoreContext.Consumer>
    )
}

// let mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
//     return {
//         updateNewPostText: (text: string) => {
//             dispatch(updateNewPostTextCreator(text))
//         },
//         addPost: () => {
//             dispatch(AddPostCreator(store.getState().profilePage.newPostText))
//         }
//     }
// }

// export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)