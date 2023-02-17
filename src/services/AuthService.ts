import {User} from "../interfaces";
import axios from "axios";

const API_URL = "http://localhost:8080/";

export const getUsers = () => {
    return axios.get<User[]>(API_URL + "user");
}

export const getUser = (id: number) => {
    return axios.get(API_URL + "user/" + id);
}

export const createUser = (email: string, password: string) => {
    return axios.post(API_URL + "user", {
        email,
        password,
    });
}

export const login = (email: string, password: string) => {
    axios.get(API_URL + "user/login", {
        auth: {
            username: email,
            password: password,
        }
    }).then((res) => {
        if (res.data.email) {
            localStorage.setItem("user", JSON.stringify(res.data));
        }
    });
}

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") || '{}');
};

export const deleteUser = (id: number) => {
    return axios.delete(API_URL + "user/" + id);
}