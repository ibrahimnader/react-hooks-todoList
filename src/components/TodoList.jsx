import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, deleteItem, editItem, deleteAll }) => {
  return (
    <div>
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>
        {list.map((item) => {
          return (
            <TodoItem
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          );
        })}
        <button
          onClick={() => deleteAll()}
          className="btn btn-danger btn-blck text-capitalize mt-5"
        >
          clear list
        </button>
      </ul>
    </div>
  );
};
export default TodoList;
