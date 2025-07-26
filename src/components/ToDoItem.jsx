export default function ToDoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <li>
      {todo.complete && '✅ '}
      {todo.text}{' '}
      <button onClick={() => toggleComplete(todo.id)}>Toggle Complete</button>{' '}
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}
