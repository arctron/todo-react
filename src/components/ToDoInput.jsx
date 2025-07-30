export default function ToDoInput({
  newTodo,
  setNewTodo,
  addTodo,
  clearTodos,
}) {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />{' '}
      <button onClick={addTodo}>Add Item</button>{' '}
      <button onClick={clearTodos}>Clear All</button>
    </div>
  );
}
