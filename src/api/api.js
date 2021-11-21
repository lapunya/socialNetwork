import * as axios from 'axios';

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '99b090b4-f93a-4bdd-9586-bce40b4e455c'
    }
    
});

export const profileApi = {
    getProfileData(userId) {
        return instanse
            .get(`profile/${userId}`)
            .then(response => response.data)
    }
};

export const authApi = {
    getAuthUserData() {
        return instanse
            .get(`auth/me`)
            .then(response => response.data)
    }
};

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instanse
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
};

export const followApi = {
    checkSubscribe(userId) {
        return instanse
            .get(`follow/${userId}`)
            .then(response => response.data)
    },

    removeSubscribe(userId) {
        return instanse
            .delete(`follow/${userId}`)
            .then(response => response.data)
    },

    addSubscribe(userId) {
        return instanse
            .post(`follow/${userId}`, {})
            .then(response => response.data)
    } 
};