const TaskList = ({ tasks, onDelete, onComplete }) => {
  return (
    <div className="task-list">
      <h2>Your Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available. Add one!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed-task" : ""}`}
            >
              <div className="task-details">
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
              <div className="task-actions">
                <button
                  onClick={() => onComplete(task.id)}
                  className={`task-complete ${task.completed ? "disabled" : ""}`}
                >
                  {task.completed ? "Completed" : "Complete"}
                </button>
                <button
                  onClick={() => onDelete(task.id)}
                  className="task-delete"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
