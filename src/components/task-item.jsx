const TaskItem = ({ title, priority, isDone }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Priority: {priority}</p>
      <p>Done: {isDone ? "Yes" : "No"}</p>
    </div>
  );
};

export default TaskItem;
