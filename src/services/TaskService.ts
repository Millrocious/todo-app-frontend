import {Task} from "../interfaces";
import axios from "axios";

export const getTasks = () => {
    return axios.get<Task[]>("http://localhost:8080/task");
}

export const getTask = (id: number) => {
    return axios.get("http://localhost:8080/task/" + id);
}

export const createTask = (task: Task) => {
    return axios.post("http://localhost:8080/task", task);
}

export const deleteTask = (id: number) => {
    return axios.delete("http://localhost:8080/task/" + id);
}

export const editTask = (id: number, task: Task) => {
    return axios.put("http://localhost:8080/task/" + id, task);
}

