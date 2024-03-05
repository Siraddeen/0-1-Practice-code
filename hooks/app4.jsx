import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function useIsOnline() {
  const [online, setOnline] = useState(window.navigator.onLine);

  useEffect(() => {
    const isonline = () => {
      console.log("you are online");
      setOnline(true);
    };
    const offline = () => {
      console.log("you are not in online");
      setOnline(false);
    };
    window.addEventListener("online", isonline);
    window.addEventListener("offline", offline);

    return () => {
      window.removeEventListener("online", isonline);
      window.removeEventListener("offline", offline);
    };
  }, []);
  return online;
}

function App() {
  const net = useIsOnline();
  return (
    <>
      <div>{net ? <p>you ar online</p> : <p>you are offlineee</p>}</div>
    </>
  );
}

export default App;
