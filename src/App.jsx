import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [sm, setSm] = useState(false);
  const inc = () => {
    setCount(count + 1);
    setSm(true);
  };
  useEffect(() => {
    if (sm) {
      console.log("you are good");
    }
  }, [count, sm]);

  return (
    <>
      <div>hi</div>
      <p>{count}</p>
      <button onClick={inc}>press me {count}</button>
      {sm && <p>You are good!</p>}
    </>
  );
};

export default App;
