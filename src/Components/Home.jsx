import React, { useState } from "react";

function Home() {
  const [todo, SetTodo] = useState("");
  const [list, setList] = useState([]);

  const submit = () => {
    event.preventDefault();
    if (todo.trim() !== "") {
      setList([...list, todo]);
      SetTodo("");
    }
    console.log(list);
    
  };

  const deleteTask = (Deleteindex) => {
    const newTasks = list.filter((item, index) => index !== Deleteindex);
    setList(newTasks);
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          margin: "10px",
        }}
      >
        <form action="" onSubmit={submit}>
          <input
            type="text"
            value={todo}
            placeholder="Enter A task"
            onChange={(e) => SetTodo(e.target.value)}
          />
          <button type="submit" style={{backgroundColor:"blue",color:"white"}}>Add Task</button>
        </form>
      </div>
      {list.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "20px 0px 0px 100px",
            marginLeft: "100px",
            height: "150px",
            borderRadius: "12px",
            width: "80%",
            backgroundColor: "Blue",
            color:"white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1>{item}</h1>
          <button
            onClick={() => deleteTask(index)}
            style={{
              backgroundColor: "red",
              borderRadius: "5px",
              color: "white",
              border: "1px solid white",
              height: "50px",
              width: "100px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
