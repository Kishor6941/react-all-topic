import React, { useReducer, useState } from "react";

const ReducerHook = () => {
  const initialState = [];
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  function reducer(state, action) {
    switch (action.type) {
      case "ADD_TODO": {
        return (state = [
          ...state,
          {
            id: state.length + 1,
            name: action.payload,
          },
        ]);
      }
      case "DELETE_TODO": {
        return state.filter((ele) => ele?.id !== action.payload);
      }
      case "RESET_TODOS": {
        return state = [];
      }
      default: {
        return state;
      }
    }
  }

  return (
    <div className="col-md-8 m-auto">
      <h1>Todo List : {todos?.length}</h1>
      <div className="row">
        {" "}
        <div className="col-md-4">
          <label>Add new Task :</label>
          <input
            type="text"
            className="form-control"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="col-md-4 mt-4">
          <button
            className="btn btn-primary"
            onClick={() => dispatch({ type: "ADD_TODO", payload: inputValue })}
          >
            Add Todo
          </button>{" "}
          <button
            className="btn btn-secondary"
            onClick={() => dispatch({ type: "RESET_TODOS" })}
          >
            Reset Todos
          </button>
        </div>
      </div>
      <hr />
      <div>
        <ul className="list-group">
          {
          !todos?.length ? <h1>No Todos Found</h1>
          :
          todos?.map((todo) => (
            <li
              key={todo?.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {todo?.name}
              <span className="badge">
                <button className="btn btn-success">Update</button>{" "}
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    dispatch({ type: "DELETE_TODO", payload: todo?.id })
                  }
                >
                  Delete
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReducerHook;
