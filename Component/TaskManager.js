import React, { useState, useEffect } from "react";

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (event) => {
    event.preventDefault();
    const taskName = event.target.elements.taskName.value;
    if (taskName.trim() !== "") {
      setTasks([...tasks, { name: taskName, completed: false }]);
      event.target.reset();
    }
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="task-manager">
      <form onSubmit={handleAddTask}>
        <input type="text" name="taskName" placeholder="Add task" /><br></br>
        <button type="submit">Add To Cart</button>

      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span
              className={task.completed ? "completed" : ""}
              onClick={() => handleCompleteTask(index)}
            >
              {task.name}
            </span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
        
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
