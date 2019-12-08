import React, { useState, useEffect } from "react";

const App = () => {
  const [viewCompleted, setViewCompleted] = useState(false)
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: "Go to Market",
      description: "Buy ingredients to prepare dinner",
      completed: true
    },
    {
      id: 2,
      title: "Study",
      description: "Read Algebra and History textbook for upcoming test",
      completed: false
    },
    {
      id: 3,
      title: "Sally's books",
      description: "Go to library to rent sally's books",
      completed: true
    },
    {
      id: 4,
      title: "Article",
      description: "Write article on how to use django with react",
      completed: false
    }
  ])

  return (
    <main className="content">
      <h1 className="text-white text-uppercase text-center my-4">Todo app</h1>
      <div className="row ">
        <div className="col-md-6 col-sm-10 mx-auto p-0">
          <div className="card p-3">
            <div className="">
              <button className="btn btn-primary">Add task</button>
            </div>
            <div className="my-5 tab-list">
              <span
                onClick={() => setViewCompleted(true)}
                className={viewCompleted ? "active" : ""}
              >
                complete
              </span>
              <span
                onClick={() => setViewCompleted(false)}
                className={viewCompleted ? "" : "active"}
              >
                Incomplete
              </span>
            </div>
            <ul className="list-group list-group-flush">
              {todoList.map(item => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <span
                    className={`todo-title mr-2 ${
                      viewCompleted ? "completed-todo" : ""
                    }`}
                    title={item.description}
                  >
                    {item.title}
                  </span>
                  <span>
                    <button className="btn btn-secondary mr-2"> Edit </button>
                    <button className="btn btn-danger">Delete </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;