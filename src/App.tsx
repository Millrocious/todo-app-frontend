import React, {ChangeEvent, useState} from 'react';
import "./App.css"
import {Task} from "./interfaces";
import TodoTask from "./сomponents/TodoTask";

const App = () => {
    const [task, setTask] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [todoList, setTodoList] = useState<Task[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") {
            setTask(event.target.value)
        } else {
            setDescription(event.target.value)
        }
    };

    const addTask = (): void => {
        const newTask = {taskName: task, description: description};
        setTodoList([...todoList, newTask]);
        setTask("");
        console.log(todoList);
    };

    const deleteTask = (taskName: string): void => {
        setTodoList(todoList.filter((task) => {
            return task.taskName != taskName
        }))
    };

    return (
    <div className="App">
        <div className="header">
            <div className="inputContainer">
              <input type="text" placeholder="Task... "
                     name="task"
                     value={task}
                     onChange={handleChange}/>
              <button onClick={addTask}>Add Task</button>
            </div>
        </div>
        <div className="todolist">
            {todoList.map( (task: Task, key: number) => {
                return <TodoTask key={key} task={task} completeTask={deleteTask}/>;
            })}
        </div>
    </div>
  );
}

export default App;
