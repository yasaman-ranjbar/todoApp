import { useState } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("Enter Todo !");
      return;
    }
    props.addTodoHandler(input);
    setInput("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <input type="text" value={input} onChange={changeHandler} />
          <button className="button addTodo" type="submit">Add Todo</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
