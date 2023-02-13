import React, {useEffect, useState} from 'react';
import "./App.css"
import {Task} from "./interfaces";
import TodoTask from "./сomponents/TodoTask";
import {getTasks} from "./services/TaskService";
import HeaderTask from "./сomponents/HeaderTask";

const App = () => {
    const [todoList, setTodoList] = useState<Task[]>([]);

    useEffect(() => {
        getTasks().then(res => setTodoList(res.data))
    }, [])

    return (
    <div className="App">
        <HeaderTask/>
        <div className="todolist">
            {todoList.map( (task: Task, key: number) => {
                return <TodoTask key={key} task={task}/>;
            })}
        </div>
    </div>
  );
}

export default App;
