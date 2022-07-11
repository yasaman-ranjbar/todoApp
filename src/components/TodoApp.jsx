import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import NavBar from "./NavBar";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [selectedOption , setSelectedOption] = useState("All")

  useEffect(() => {
    filterTodos(selectedOption.value);
  }, [todos, selectedOption]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompilted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (id) => {
    const index = todos.findIndex((t) => t.id === id);
    //do not mutate
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompilted = !selectedTodo.isCompilted;
    const updatedeTodos = [...todos];
    updatedeTodos[index] = selectedTodo;
    setTodos(updatedeTodos);
  };

  const removeTodo = (id) => {
    const filterdTodos = todos.filter((t) => t.id !== id);
    setTodos(filterdTodos);
  };

  const filterTodos = (status) => {
    console.log(status);
    switch (status) {
      case "Complited":
        setFilteredTodos(todos.filter((t) => t.isCompilted));
        break;
      case "Uncomplited":
        setFilteredTodos(todos.filter((t) => !t.isCompilted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  const selectHandler = (e) => {
    setSelectedOption(e)
    filterTodos(e.value)
  };

  return (
    <div className="container">
      <div className="navbar">
        <NavBar
          selectedOption={selectedOption}
          onChange={selectHandler}
          unCompiltedTodos={todos.filter((t) => !t.isCompilted).length}
        />
      </div>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={filteredTodos} onComplete={completeTodo} onDelete={removeTodo} />
    </div>
  );
};

export default TodoApp;
