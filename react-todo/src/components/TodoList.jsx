import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: false },
    { id: 3, text: "Write Tests", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([
      ...todos,
      { id: todos.length + 1, text: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <ul data-testid="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            data-testid={`todo-item-${todo.id}`}
            onClick={() => toggleTodo(todo.id)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            {todo.text}
            <button
              data-testid={`delete-button-${todo.id}`}
              onClick={(e) => {
                e.stopPropagation();
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <input
        data-testid="todo-input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button data-testid="add-button" onClick={addTodo}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoList;
