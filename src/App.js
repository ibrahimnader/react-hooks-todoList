import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [list, setList] = useState([]);
  const addItem = (item) => {
    let newList = [...list, item];
    setList(newList);
  };
  const editItem = (id, text) => {
    let newList = list.map((item) =>
      item.id === id ? { ...item, text: text } : item
    );
    setList(newList);
  };
  const deleteItem = (id) => {
    let newList = list.filter((item) => item.id !== id);
    setList(newList);
  };
  const deleteAll = () => {
    setList([]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-md-4">
          <h3 className="text-capitalize text-center">todo input</h3>
          <TodoInput addItem={addItem} />
          <TodoList
            list={list}
            deleteItem={deleteItem}
            editItem={editItem}
            deleteAll={deleteAll}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
