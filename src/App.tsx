import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import DateDisplay from "./components/DateDisplay";
import FilterDropdown from "./components/FilterDropdown";
import { FcTodoList } from "react-icons/fc";
import { Todo } from "./types";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [view, setView] = useState<"all" | "active" | "completed">("all");

  return (
    <div className="min-h-screen bg-gray-100 bg-gradient-to-r from-blue-200 via-blue-100 to-gray-200 p-4 flex items-start justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div>
          <h1 className="font-serif text-3xl ts mb-6 text-center text-gray-500 flex items-center justify-center">
            Todo List <FcTodoList className="ml-2" />
          </h1>
        </div>
        <DateDisplay />
        <TodoForm todos={todos} setTodos={setTodos} />
        <FilterDropdown view={view} setView={setView} />
        <TodoList todos={todos} setTodos={setTodos} view={view} />
      </div>
    </div>
  );
};

export default App;
