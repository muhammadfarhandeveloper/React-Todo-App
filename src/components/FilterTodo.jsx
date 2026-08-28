function FilterTodo() {
  return (
    <select className="form-select">
      <option value="all">All Tasks</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
}

export default FilterTodo;
