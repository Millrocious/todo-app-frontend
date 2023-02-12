import React, {useState} from "react";
import {Task} from "../interfaces";

interface Props {
    task: Task;
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task, completeTask}: Props) => {
    const [isDone, setDone] = useState(false);

    const toggleClass = () => {
        setDone(!isDone);
    };

    return (
        <div className={isDone ? 'taskCompleted': "task"}>
            <button className="deleteBtn" onClick={() => {
                completeTask(task.taskName)
            }}><img src={require('./icons/deleteIcon.png')} alt=""/></button>
            <div className="content">
                <span>{task.taskName}</span>
            </div>
            <button className="completeBtn" onClick={() => {
                toggleClass()
            }}></button>
        </div>
    )
}

export default TodoTask