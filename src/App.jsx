import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoInput from './components/ToDoInput.jsx';
import ToDoList from './components/ToDoList.jsx';
function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    const trimmed = newTodo.trim();
    if (trimmed) {
      setTodos([...todos, { id: uuidv4(), text: trimmed, complete: false }]);
      setNewTodo('');
    } else {
      alert('Please enter a to-do item.');
    }
  }

  function toggleComplete(todoId) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      }),
    );
  }

  function deleteTodo(todoId) {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  }

  function clearTodos() {
    setTodos([]);
  }

  return (
    <>
      <h2>Welcome to my To Do List app!</h2>
      <ToDoInput
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        addTodo={addTodo}
        clearTodos={clearTodos}
      />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
