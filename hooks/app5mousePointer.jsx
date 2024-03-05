import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";

const useMousePointer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handmousemove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", handmousemove);

    return () => {
      window.removeEventListener("mousemove", handmousemove);
    };
  }, []);
  return position;
};

function App() {
  const mpointer = useMousePointer();
  return (
    <>
      Your mouse is @ now {mpointer.x} of x axis & {mpointer.y} of y axis
    </>
  );
}

export default App;
