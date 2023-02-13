import React, {useState} from "react";
import {Task} from "../interfaces";
import {deleteTask, editTask} from "../services/TaskService";

interface Props {
    task: Task;
}

const TodoTask = ({task}: Props) => {
    const [isDone, setDone] = useState<boolean>(task.isDone);

    const toggleClass = () => {
        task.isDone = !task.isDone;
        setDone(task.isDone);
        editTask(task.id, task).then(res => console.log(res));
    };

    return (
        <div className={isDone ? 'taskCompleted': "task"}>
            <button className="deleteBtn" onClick={() => {
                deleteTask(task.id).then(res => console.log(res))
            }}><img src={require('./icons/deleteIcon.png')} alt=""/></button>
            <div className="content">
                <span>{task.isDone.toString()} {task.isDone}</span>
            </div>
            <button className="completeBtn" onClick={() => {
                toggleClass()
            }}></button>
        </div>
    )
}

export default TodoTask