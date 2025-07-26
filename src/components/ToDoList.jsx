import ToDoItem from './ToDoItem.jsx';
export default function ToDoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
