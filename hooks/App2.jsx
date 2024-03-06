// till non using of Custom hooks 

import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
    });
  }, []);

  return (
    <>
      {todos.map((t) => (
        <Track t={t} />
      ))}
    </>
  );
}

function Track({ t }) {
  return (
    <div>
      {t.title}
      <br />
      {t.description}
    </div>
  );
}
export default App;


// install axios seperatly
