import { useState } from "react";

const TaskForm = ({ onSubmit, task = {} }) => {
  const [title, setTitle] = useState(task.title || "");
  const [description, setDescription] = useState(task.description || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="task-form"
    >
      <h2>{task.id ? "Edit Task" : "Add Task"}</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
        required
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="task-textarea"
      />
      <button type="submit" className="task-button">
        {task.id ? "Update" : "Add Task"}
      </button>
    </form>
  );
};

export default TaskForm;
