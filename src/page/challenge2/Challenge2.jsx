import AddTask from '../../components/challenge2/addTask/AddTask';
import { useList } from '../../components/challenge2/hook/useList';
import ListTask from '../../components/challenge2/listTask/ListTask';

export default function Challenge2() {
  const {
    listTask,
    createTask,
    deleteTask,
    resetListTask,
    sortListTask,
    reverseListTask,
  } = useList([]);

  return (
    <div>
      <h1>TAREAS</h1>
      <button onClick={reverseListTask}>reverse</button>
      <select
        name="filterListTask"
        id="filterTask"
        onChange={(e) => sortListTask(e.target.value)}
      >
        <option>filtrar</option>
        <option value="majorMenor">mas largo</option>
        <option value="menorMajor">mas pequeño</option>
      </select>
      <ListTask listTask={listTask} deleteTask={deleteTask} />
      <AddTask createTask={createTask} />
      <button onClick={resetListTask}>reset</button>{' '}
    </div>
  );
}
