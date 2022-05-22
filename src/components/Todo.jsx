import React, { useState } from "react";
import TodoInput from "./TodoInput";
import { v4 as uuid } from "uuid";
import "./Todo.css";
import TodoList from "./TodoList";
const Todo = () => {
  const [data, setData] = useState([]);
  // const [finishedTask, setFinishedTask] = useState([]);
  const [toggle, setToggle] = useState(true);
  // let toggle = false;

  const HandleAdd = (title) => {
    const payload = {
      title: title,
      status: false,
      id: uuid(),
    };
    setData([...data, payload]);
    // console.log(data);
  };

  const HandleCompletedItem = (id) => {
    // alert(id)
    let updatedList = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updatedList);
    
    // console.log(finishedTask);
  };

  const HandleDelete = (id) => {
    let updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };
  
  return (
    <div>
      <div className="inputBox">
        <TodoInput onClick={HandleAdd} />
      </div>
        <div className="ShowList">
          <div>
            {data.filter(item=> toggle? true : item.status).map((item) => {
              return (
                <TodoList
                  key={item.id}
                  {...item}
                  handleChange={HandleCompletedItem}
                  HandleDelete={HandleDelete}
                />
              );
            })}
          </div>
          <button className="showbtn" onClick={()=>setToggle(!toggle)}>{toggle ? "Show Completed Task":"Show All Task"}</button>
      </div>
    </div>
  );
};

export default Todo;
