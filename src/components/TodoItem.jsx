import React, { useState } from "react";
import { FaPen, FaTrash, FaCheck } from "react-icons/fa";
const TodoItem = ({ item, deleteItem, editItem }) => {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(item.text);
  const handleEdit = () => {
    setEditing(!editing);
    editItem(item.id, text);
  };
  return (
    <li className="list-group text-capitalize d-flex  flex-row justify-content-between my-2">
      <div className="my-1">
        {editing ? (
          <input
            type="text"
            value={text}
            className="form-control"
            style={{ width: "150%" }}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <h6>{item.text}</h6>
        )}
      </div>
      <div className="my-1">
        {editing ? (
          <FaCheck className="text-success mx-1" onClick={handleEdit} />
        ) : (
          <FaPen
            className="text-success mx-1"
            onClick={() => setEditing(!editing)}
          />
        )}

        <FaTrash
          className="text-danger mx-1"
          onClick={() => deleteItem(item.id)}
        />
      </div>
    </li>
  );
};
export default TodoItem;
