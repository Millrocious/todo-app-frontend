import React, {ChangeEvent, useState} from "react";
import {createTask} from "../services/TaskService";
import Button from "./Button";

const HeaderTask = () => {
    const [taskName, setTaskName] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [isDone, setIsDone] = useState<boolean>(false);
    const [owner, setOwner] = useState<string>("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTaskName(event.target.value);
    };

    const addTask = (): void => {
        const newTask = {id: 0, name: taskName, description: description, isDone: isDone, owner: owner};
        createTask(newTask).then(res => console.log(res));
    };

    return (
        <div className="header">
            <div className="inputContainer">
                <input type="text" placeholder="Task... "
                       name="task"
                       value={taskName}
                       onChange={handleChange}/>
                <Button color={"#deae5f"} bColor={"#f0c674"} onClick={() => {
                    addTask();
                }}>
                    Add task
                </Button>
            </div>
        </div>
    )
}

export default HeaderTask