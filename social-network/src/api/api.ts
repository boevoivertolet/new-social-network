import axios from 'axios'


// const baseURL = 'https://social-network.samuraijs.com/api/1.0/'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b9a47b16-0cbb-4fe2-8152-303706b5e3c1'
    }
})


export const getUsers = (currentPage: number = 2, pageSize: number = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}
export const getProfile = (userId: number) => {
    instance.get(`profile/${userId}`).then(response => response.data)
}