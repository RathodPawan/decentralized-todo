import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import Analytics from "../components/Analytics";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the backend API when the component mounts
  useEffect(() => {
    fetchTasks();
  }, []);

  // Fetch tasks from the API
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/api/tasks");
    const data = await response.json();
    setTasks(data);
  };

  // Add a new task to the backend
  const addTask = async (task) => {
    const response = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    setTasks([...tasks, newTask]);
  };

  // Delete a task from the backend
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Mark a task as completed or not completed
  const completeTask = async (id) => {
    const task = tasks.find((t) => t.id === id);
    const updatedTask = { ...task, completed: !task.completed };

    const response = await fetch(`http://localhost:5000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();

    setTasks(tasks.map((t) => (t.id === id ? data : t)));
  };

  return (
    <div className="home-container">
      <h1>Decentralized To-Do App</h1>
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask} />
      <Analytics tasks={tasks} />
    </div>
  );
};

export default Home;
