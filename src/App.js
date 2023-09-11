import "./App.css";
import { useState } from "react";
import { Task } from "./Task";

function App() {
  // Day - 7
  // ToDo List
  const [todoList, setTodoList] = useState([]);
  const [newTask, showNewTask] = useState("");

  const handleChange = (event) => {
    showNewTask(event.target.value);
  };

  const addTask = () => {
    // const newToDoList = [...todoList, newTask];
    // setTodoList(newToDoList);

    // optimize
    // setTodoList([...todoList, newTask]);

    // so delete on the basis of id instead of name

    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      name: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  /*
const deleteTask = (taskName) => {
    const newToDoListAfterDelete = todoList.filter((task) => {
      // if (taskName === task) {
      //   return false;
      // } else {
      //   return true;
      // }

      // optimize 
      return taskName !== task;
    });
*/
  // more optimize

  //       const deleteTask = (taskName) => {
  //       // const newToDoListAfterDelete = todoList.filter((task) => taskName !== task);
  //       // setTodoList([newToDoListAfterDelete]);

  //       setTodoList(todoList.filter((task) => taskName !== task));
  // }

  // so delete using key
  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="lsit">
        {todoList.map((task) => {
          // change below logic to component
          return (
            <Task taskName={task.name} id={task.id} completed={task.completed} deleteTask={deleteTask}  completeTask={completeTask} />
          );
        })}
      </div>
    </div>
  );
}
export default App;
