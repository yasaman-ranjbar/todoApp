const Todo = ({ todo, onComplete, onEdit , onDelete }) => {
  return (
    <div className="todo">
      <div onClick={onComplete} className={`todoText ${todo.isCompilted ? "completed" : ""}`}>
        {todo.text}
      </div>
      <div>
        <button className="button" onClick={onEdit}>Edit</button>
        <button className="button remove" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default Todo;
