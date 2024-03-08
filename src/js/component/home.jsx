import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<div class="container">
      <h1>Lista de Tareas</h1>
      <input type="text" id="taskInput" placeholder="Agregar nueva tarea..." />
      <ul id="taskList"></ul>
    </div>
	);
};

export default Home;
