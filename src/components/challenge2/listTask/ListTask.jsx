export default function ListTask({
  listTask,
  deleteTask,
}) {
  return (
    <ul>
      {listTask.map((task) => (
        <li key={task.id}>
          <p>{task.body}</p>
          <button onClick={() => deleteTask(task.id)}>x</button>
        </li>
      ))}
    </ul>
  );
}
