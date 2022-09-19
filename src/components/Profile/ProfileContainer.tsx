import React from 'react';
import {Profile, ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathUserIdType = {
    userId: string
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type mapStateToPropsType = {
    profile: ProfileType
}

type OwnPropsType = mapDispatchToPropsType & mapStateToPropsType

type PropsType = RouteComponentProps<PathUserIdType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, {}> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
};


let mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    profile: state.profilePage.profile
})


let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);

// import axios from 'axios'
// import React, { ChangeEvent, useEffect, useState } from 'react'
// import ReactDOM from 'react-dom/client';
//
// // Types
// type CommentType = {
//     postId: number
//     id: number
//     name: string
//     email: string
//     body: string
// }
//
// // Api
// const instance = axios.create({
//     baseURL: 'https://jsonplaceholder.typicode.com/'
// })
//
// const commentsAPI = {
//     getComments() {
//         return instance.get<CommentType[]>('comments?_limit=10')
//     },
//     createComment(body: string) {
//         const payload = {
//             body,
//             email: 'test@gmail.com',
//             name: 'Name',
//             postId: Math.random()
//         }
//         // Promise.resolve() стоит в качестве заглушки, чтобы TS не ругался и код компилировался
//         // Promise.resolve() нужно удалить и написать правильный запрос для создания нового комментария
//         return Promise.resolve()
//     }
// }
//
//
// // App
// export const App = () => {
//
//     const [comments, setComments] = useState<CommentType[]>([])
//     const [commentBody, setCommentBody] = useState('')
//
//     useEffect(() => {
//         commentsAPI.getComments()
//             .then((res) => {
//                 setComments(res.data)
//             })
//     }, [])
//
//     const createPostHandler = () => {
//         commentsAPI.createComment(commentBody)
//             .then((res: any) => {
//                 const newComment = res.data
//                 setComments([newComment, ...comments])
//                 setCommentBody('')
//             })
//     };
//
//     const createTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
//         setCommentBody(e.currentTarget.value)
//     };
//
//     return (
//         <>
//             <h1>📝 Список комментариев</h1>
//
//             <div style={{marginBottom: '15px'}}>
//                 <input style={{width: '300px'}}
//                        type="text"
//                        value={commentBody}
//                        placeholder={'Введите новый комментрарий'}
//                        onChange={createTitleHandler}
//                 />
//                 <button style={{marginLeft: '15px'}}
//                         onClick={() => createPostHandler()}>
//                     Добавить новый комментарий
//                 </button>
//             </div>
//
//             {
//                 comments.map(c => {
//                     return <div key={c.id}><b>Comment</b>: {c.body} </div>
//                 })
//             }
//         </>
//     )
// }
//
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(<App/>)

// Описание:
// Напишите запрос на сервер для создания нового комментария.
// Типизацию возвращаемых данных в ответе указывать необязательно, но можно и указать (в ответах учтены оба варианта).
// Исправленную версию строки напишите в качестве ответа.
// Пример ответа: return Promise.resolve<PostType[]>(data)
