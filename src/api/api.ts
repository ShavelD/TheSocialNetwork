import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "811e1da1-fd94-483f-ae93-53f9806a63b0"
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
        return instance.get(`profile/` + userId
        ).then(response => {
                return response.data
            }
        )
    }
}

export const AuthMe =  {
    getAuthMe() {
        return instance.get(`auth/me`
        ).then(response => {
                return response.data
            }
        )
    }
}