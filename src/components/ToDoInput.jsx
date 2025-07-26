export default function ToDoInput({ newTodo, setNewTodo, addTodo }) {
  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTodo()}
      />{' '}
      <button onClick={addTodo}>Add Item</button>
    </div>
  );
}
