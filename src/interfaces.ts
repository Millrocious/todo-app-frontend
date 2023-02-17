export interface Task {
    id: number;
    name: string;
    description: string;
    isDone: boolean;
    owner: string;
}

export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}