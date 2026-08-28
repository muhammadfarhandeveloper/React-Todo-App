import TodoItem from "./TodoItem"


function TodoList({todos}) {

  if(todos.length === 0 ){
     return (
      <div className="text-center py-5">
        <i className="bi bi-clipboard-check fs-1 text-muted"></i>

        <h4 className="mt-3">
          No tasks found
        </h4>

        <p className="text-muted">
          Add a new task or change your search/filter.
        </p>
      </div>
    );
  }
  
  return (
     <div className="list-group">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  )
}

export default TodoList
