import React, { useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = (event) => {
    if (event.key === "Enter" && inputValue !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const handleTaskDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        id="taskInput"
        placeholder="Agregar nueva tarea..."
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={addTask}
      />
      <ul id="taskList">
        {tasks.length === 0 ? (
          <li>No hay tareas, añadir tareas</li>
        ) : (
          tasks.map((task, index) => (
            <li key={index} onMouseEnter={() => (document.getElementById(`task-${index}`).style.display = "block")} onMouseLeave={() => (document.getElementById(`task-${index}`).style.display = "none")}>
              {task}
              <i id={`task-${index}`} className="fas fa-trash-alt" style={{ display: "none" }} onClick={() => handleTaskDelete(index)}></i>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Home;
  