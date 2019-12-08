import React, { useState, useEffect, Suspense, lazy } from "react";

const Modal = lazy(() => import("./components/Modal"));

const App = () => {
  const [viewCompleted, setViewCompleted] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const [activeItem, setActiveItem] = useState({
    title: "",
    description: "",
    completed: false
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then(res => setTodoList(res.data))
      .catch(err => console.log(err));
  }, []);

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
      {modal && (
        <Suspense fallback={<div />}>
          <Modal
            activeItem={activeItem}
            toggle={toggle}
            onSave={handleSubmit}
          />
        </Suspense>
      )}
    </main>
  );
};

export default App;
