import React, { Suspense, startTransition } from "react";
import { lazy } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

function App() {
  return (
    <BrowserRouter>
      <div>
        hi
        <Clic></Clic>
      </div>
      <Routes>
        <Route>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/landing"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Clic() {
  const nav = useNavigate();
  return (
    <div>
      <button onClick={() => nav("/landing")}>go to landing</button>
      <button onClick={() => nav("/dashboard")}>go to dashboard</button>
    </div>
  );
}

export default App;
