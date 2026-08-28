import { useState } from "react";
import "./App.css";
import FilterTodo from "./components/FilterTodo";
import SearchBar from "./components/SearchBar";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React Components",
      completed: true,
    },
    {
      id: 2,
      text: "Practice Props and State",
      completed: false,
    },
    {
      id: 3,
      text: "Build a Todo App",
      completed: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const filterTodos = todos
    .filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm.toLowerCase().trim()),
    )
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    });

    const addTodo = (text) =>{
      if(text.trim() === "") return;
      const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      console.log(newTodo);
      setTodos([...todos, newTodo]);
    }

    const completedCount = todos.filter((todo)=> todo.completed).length;
    const pendingCount = todos.length - completedCount;

  return (
    <>
      <div className="min-vh-100 todo-page py-3 py-md-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-9 col-xl-8">
              <div className="card shadow-lg border-0 todo-card">
                <div className="card-header text-center py-4">
                  <h1 className="mb-2 fw-bold">
                    <i className="bi bi-check2-square me-2"></i>
                    My Todo App
                  </h1>

                  <p className="mb-0 text-muted">
                    Stay organized and manage your daily tasks
                  </p>
                </div>

                <div className="card-body p-3 p-md-4">
                  <TodoForm addTodo={addTodo} />

                  <div className="row g-3 mt-1">
                    <div className="col-12 col-md-7">
                      <SearchBar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                      />
                    </div>

                    <div className="col-12 col-md-5">
                      <FilterTodo filter={filter} setFilter={setFilter} />
                    </div>
                  </div>

                  <div className="row text-center g-3 mt-2 mb-4">
                    <div className="col-4">
                      <div className="card border-primary h-100">
                        <div className="card-body p-3">
                          <small className="text-muted d-block">Total</small>
                          <h4 className="mb-0 text-primary">{todos.length}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card border-success h-100">
                        <div className="card-body p-3">
                          <small className="text-muted d-block">
                            Completed
                          </small>
                          <h4 className="mb-0 text-success">{completedCount}</h4>
                        </div>
                      </div>
                    </div>

                    <div className="col-4">
                      <div className="card border-warning h-100">
                        <div className="card-body p-3">
                          <small className="text-muted d-block">Pending</small>
                          <h4 className="mb-0 text-warning">{pendingCount}</h4>
                        </div>
                      </div>
                    </div>
                  </div>

                  <TodoList todos={filterTodos} />
                </div>

                <div className="card-footer bg-white border-0 p-3 p-md-4">
                  <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3">
                    <span className="text-muted">{pendingCount} task{pendingCount != 1 ? "s" : ""} remaining</span>

                    <button className="btn btn-outline-danger">
                      <i className="bi bi-trash me-2"></i>
                      Clear Completed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
