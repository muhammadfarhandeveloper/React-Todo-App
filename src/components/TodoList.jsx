import TodoItem from "./TodoItem"


function TodoList() {

  const todos = [
    {
      id: 1,
      text: "React Learning",
      completed: true
    },
    {
      id: 2,
      text: "Props Learning in React",
      completed: false
    },
  ]

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
