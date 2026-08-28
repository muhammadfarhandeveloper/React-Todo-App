import { useState } from "react";

function TodoForm({addTodo}) {

  const [input,setInput] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    addTodo(input);
    setInput("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            placeholder="What needs to be done?"
            value={input}
            onChange={(e)=> setInput(e.target.value)}
          />

          <button type="submit" className="btn btn-primary">
            <i className="bi bi-plus-lg me-2"></i>
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
