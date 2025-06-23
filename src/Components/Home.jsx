import React, { useState } from "react";
import Button from "react-bootstrap/Button";

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
          style={{height:"35px",borderRadius:"2px",width:"300px"}}
            type="text"
            value={todo}
            placeholder="Add A task"
            onChange={(e) => SetTodo(e.target.value)}
          />
          <Button
            type="submit"
          >
            Add Task
          </Button>
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
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h1>{item}</h1>
       
          <Button
            type="submit"
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
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Home;
