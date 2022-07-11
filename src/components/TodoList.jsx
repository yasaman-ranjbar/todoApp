import Todo from "./Todo";

const TodoList = ({ todos, onComplete , onDelete }) => {

  const renderTodos = () => {
    if (todos.length === 0) return <p>add some todos</p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={()=> onDelete(todo.id)}
        //   onEdit={()=> onEdit(todo.id)}
        />
      );
    });
  };

  return <div>{renderTodos()}</div>;
};

export default TodoList;
