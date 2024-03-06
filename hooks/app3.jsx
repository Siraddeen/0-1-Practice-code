import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function useTodo(n) {
  const [loading, setLoading] = useState(true);
  // custom hooks
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const value = setInterval(() => {
      console.log("from inside");
      axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
        setTodos(res.data.todos);
        setLoading(false);
      });
    }, n * 1000);
    axios.get("https://sum-server.100xdevs.com/todos").then((res) => {
      setTodos(res.data.todos);
      setLoading(false);
      console.log("from 2");
    });
    return () => {
      clearInterval(value); // this is clean up logic
    };
  }, [n]);

  return { todos, loading };
}

function App() {
  const { todos, loading } = useTodo(12);
  if (loading) {
    return <div>loading...</div>;
  }
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
