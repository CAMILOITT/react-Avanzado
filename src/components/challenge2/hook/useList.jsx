import { useState } from 'react';

export function useList(initialValue) {
  const [listTask, setListTask] = useState(initialValue);
  function createTask(task) {
    const newTask = { body: task, id: new Date().getTime() };
    setListTask([...listTask, newTask]);
  }
  function deleteTask(taskId) {
    const newTask = listTask.filter((task) => task.id !== taskId);
    setListTask(newTask);
  }
  function resetListTask() {
    setListTask(initialValue);
  }
  function sortListTask(modeFilter) {
    const newList = [...listTask];
    if ((modeFilter = 'majorMenor')) {
      return setListTask(newList.sort((a, b) => b.task.length - a.task.length));
    }
    if ((modeFilter = 'menorMajor')) {
      return setListTask(newList.sort((a, b) => a.task.length - b.task.length));
    }
  }
  function reverseListTask() {
    const newList = [...listTask];
    setListTask(newList.reverse());
  }
  return {
    listTask,
    createTask,
    deleteTask,
    resetListTask,
    sortListTask,
    reverseListTask,
  };
}
