import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./pages/Landing";
import { Suspense } from "react";
import Dashboard from "./pages/Dashb";

function App() {
  return (
    <BrowserRouter>
      <div>
        hello
        <Nav></Nav>
      </div>
      <Routes>
        <Route>
          <Route
            path="/landing"
            element={
              <Suspense fallback={"loading ...."}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading ...."}>
                <Dashboard />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Nav() {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/landing")}>Landing page button</button>
      <button onClick={() => navigate("/dashboard")}>
        Dashboard page button
      </button>
    </div>
  );
}

export default App;
