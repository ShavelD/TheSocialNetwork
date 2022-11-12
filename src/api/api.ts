import axios, {AxiosResponse} from "axios";
import {setUserProfile} from "../redux/profile-reducer";
import {useDispatch} from "react-redux";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "348e105a-1c54-4980-9304-09bd4d36b3be"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
                return response.data
            }
        )
    },
    getFollow(userId: number) {
        return instance.post(`follow/${userId}`, {}
        ).then(response => {
                return response.data
            }
        )
    },
    deleteUnffolow(userId: number) {
        return instance.delete(`follow/${userId}`
        ).then(response => {
                return response.data
            }
        )
    },

    getProfile(userId: string) {
        console.warn("Obsolete method. Please profileAPI object")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateUserStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const AuthMe =  {
    me() {
        return instance.get(`auth/me`)
    },
    login(data: LoginParamsType){
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{userId: number}>>>('/auth/login', data)
    }
}

export type ResponseType<D = {}> = {
    resultCode: number,
    message: Array<string>,
    data: D
}


export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
    captcha?: string
}