import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Todo } from "../types";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  view: "all" | "active" | "completed";
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos, view }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string>("");

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id: number, todotext: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todotext } : todo))
    );
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number, todotext: string) => {
    setEditId(id);
    setEditText(todotext);
  };

  const handleSave = (id: number) => {
    editTodo(id, editText);
    setEditId(null);
    setEditText("");
  };

  const filteredTodos = todos.filter((todo) => {
    if (view === "active") return !todo.completed;
    if (view === "completed") return todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center mb-4 bg-gray-100 p-4 rounded-lg shadow-sm"
        >
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="mr-4"
          />
          {editId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              className="flex-1 text-lg border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <span
              className={`flex-1 text-lg ${
                todo.completed ? "line-through text-gray-500" : "text-gray-900"
              }`}
            >
              {todo.todotext}
            </span>
          )}
          {editId === todo.id ? (
            <button
              onClick={() => handleSave(todo.id)}
              className="text-blue-500 hover:text-blue-700 ml-4"
            >
              Save
            </button>
          ) : (
            <>
              <FaEdit
                onClick={() => handleEdit(todo.id, todo.todotext)}
                className="text-blue-500 hover:text-blue-700 ml-4 cursor-pointer"
              />
              <FaTrash
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 hover:text-red-700 ml-4 cursor-pointer"
              />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
