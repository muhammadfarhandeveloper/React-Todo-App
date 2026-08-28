
function FilterTodo({filter,setFilter}) {
  return (
    <select className="form-select" value={filter} onChange={(e)=> setFilter(e.target.value)}>
      <option value="all">All Tasks</option>
      <option value="completed">Completed</option>
      <option value="pending">Pending</option>
    </select>
  );
}

export default FilterTodo;
