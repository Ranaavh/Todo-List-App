import React, { useState } from "react";
import { Todo } from "../types";

type TodoFormProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
  const [todotext, setText] = useState("");

  const addTodo = (todotext: string) => {
    const newTodo: Todo = { id: Date.now(), todotext, completed: false };
    setTodos([...todos, newTodo]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (todotext.trim()) {
      addTodo(todotext);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <input
        type="text"
        value={todotext}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a todo"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
