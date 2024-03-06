import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [vis, setVis] = useState(true);
  useEffect(() => {
    const tim = setTimeout(() => {
      setVis((r) => !r);
    }, 2000);
    return () => {
      clearTimeout(tim);
    };
  });
  return <>{vis && <MyComponent />}</>;
}

// dissapper in 2 seconds
const MyComponent = () => {
  useEffect(() => {
    console.log("c mounted");
    return () => {
      console.log("c unmounted");
    };
  }, []);

  return <>from inside my component</>;
};

export default App;
