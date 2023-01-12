export default function AddTask({ createTask }) {
  function handleOnSubmit(e) {
    e.preventDefault();
    if (e.target.inputTask.value === '') return;
    createTask(e.target.inputTask.value);
  }
  return (
    <form onSubmit={handleOnSubmit}>
      <input type="text" name="inputTask" id="task" />
      <button>+</button>
    </form>
  );
}
