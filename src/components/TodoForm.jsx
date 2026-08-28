function TodoForm() {
  return (
    <div>
      <form>
        <div className="input-group ">
          <input
            type="text"
            className="form-control"
            placeholder="What needs to be done?"
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
