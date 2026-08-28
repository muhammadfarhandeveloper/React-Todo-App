function TodoItem({todo,deleteTodo}) {
  return (
    <div className="list-group-item p-3 todo-item">
      <div className="d-flex align-items-center gap-3">
        <input
          type="checkbox"
          className="form-check-input flex-shrink-0"
          checked={todo.completed}
        />

        <span
          className={`flex-grow-1 ${
            todo.completed ? "text-decoration-line-through text-muted" : ""
          }`}
        >
          {todo.text}
        </span>

        <span
          className={`badge ${
            todo.completed ? "text-bg-success" : "text-bg-warning"
          }`}
        >
          {todo.completed ? "Completed" : "Pending"}
        </span>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={()=> deleteTodo(todo.id)}
          title="Delete task"
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
