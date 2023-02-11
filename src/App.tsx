import React, {ChangeEvent, useState} from 'react';
import "./App.css"

const App = () => {
    const [task, setTask] = useState<string>("");
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value)
    };

    return (
    <div className="App">
        <div className="header">
            <div className="inputContainer">
              <input type="text" placeholder="Task... "
                     name="task"
                     onChange={handleChange}/>
              <button>Add Task</button>
            </div>
        </div>
        <div className="todolist">

        </div>
    </div>
  );
}

export default App;
