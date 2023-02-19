import React, {useEffect, useState} from 'react';
import "./App.css"
import {Task} from "./interfaces";
import TodoTask from "./сomponents/TodoTask";
import {getTasks} from "./services/TaskService";
import HeaderTask from "./сomponents/HeaderTask";
import MenuPanel from "./сomponents/MenuPanel";
import {UserStatus, UserStatusContext} from "./context";

const App = () => {
    const [todoList, setTodoList] = useState<Task[]>([]);
    const [userStatus, setUserStatus] = React.useState(
        JSON.parse(localStorage.getItem("userStatus") || "") ?? UserStatus.LoggedOff
    );

    useEffect(() => {
        getTasks().then(res => setTodoList(res.data));
        console.log("userStatus is " + userStatus);
        // persist userStatus state changes to localStorage
        localStorage.setItem("userStatus", JSON.stringify(userStatus));
    }, [userStatus])

    return (
        <UserStatusContext.Provider value={{ userStatus, setUserStatus }}>
            <div className="App">
                <MenuPanel/>
                <HeaderTask/>
                <div className="todolist">
                    {todoList.map( (task: Task, key: number) => {
                        return <TodoTask key={key} task={task}/>;
                    })}
                </div>
            </div>
        </UserStatusContext.Provider>
     );
}

export default App;
