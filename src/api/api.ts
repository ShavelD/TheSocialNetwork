import axios from "axios";

const instance = axios.create ({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "6b1ab5a8-8761-4609-a43b-459e0d7cec6c"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => {
                return response.data
            }
        )
    },
    getFollow(userId = 1){
        return instance.post(`follow/${userId}`, {}
        ).then(response => {
                return response.data
            }
        )
    },
    deleteUnffolow(userId = 1){
        return instance.delete(`follow/${userId}`
        ).then(response => {
                return response.data
            }
        )
    },
}

