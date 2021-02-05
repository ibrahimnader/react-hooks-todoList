import React, { useState } from "react";
import { FaBook } from "react-icons/fa";
import { v4 } from "uuid";
const TodoInput = ({ addItem }) => {
  const [item, setItem] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item) {
      addItem({
        id: v4(),
        text: item,
      });
      setItem("");
    }
  };
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div className="input-group-text bg-primary text-white">
              <FaBook />
            </div>
          </div>
          <input
            type="text"
            value={item}
            className="form-control"
            placeholder="add a todo item"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-block btn-primary mt-3">
          add item
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
