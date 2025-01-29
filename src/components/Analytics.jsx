const Analytics = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="analytics">
      <h2>Task Analytics</h2>
      <div className="analytics-details">
        <p>
          Total Tasks: <span>{totalTasks}</span>
        </p>
        <p>
          Completed Tasks: <span>{completedTasks}</span>
        </p>
        <p>
          Completion Rate:{" "}
          <span>{totalTasks ? ((completedTasks / totalTasks) * 100).toFixed(2) : 0}%</span>
        </p>
      </div>
    </div>
  );
};

export default Analytics;


