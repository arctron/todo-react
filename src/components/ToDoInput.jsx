export default function ToDoInput({
  inputRef,
  newTodo,
  setNewTodo,
  addTodo,
  clearTodos,
}) {
  return (
    <div>
      <input
        ref={inputRef}
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
