// import React, { useEffect } from "react";
// import { useState } from "react";
// import "./App.css";

// const useDebounce = (func, n) => {
//   const [time, setTime] = useState();

//   useEffect(() => {
//     const a = setTimeout(() => {
//       fn();
//       setTime(a);
//     }, n);
//     setTime(a);

//     return () => {
//       clearTimeout(a);
//     };
//   }, [func, n, time]);
//   return time;
// };

// function App() {
//   function hello() {
//     return console.log("working");
//   }
//   const g = useDebounce(hello, 2000);

//   return (
//     <>
//       <div>your code is running {g}</div>
//     </>
//   );
// }

// export default App;
import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";

const useDebounce = (value, timeout) => {
  const [dbvalue, setDbValue] = useState(value);
  useEffect(() => {
    let vv = setTimeout(() => {
      setDbValue(value);
    }, timeout);

    return () => {
      clearTimeout(vv);
    };
  }, [value]);
  return dbvalue;
};

function App() {
  const [value, setValue] = useState(0);
  const debounceValue = useDebounce(value, 1000);
  return (
    <>
      Debounce value is = {debounceValue}
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
}

export default App;
