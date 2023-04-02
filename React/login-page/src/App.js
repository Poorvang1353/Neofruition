import React from "react";
import "./App.css";
import { Login } from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Protected Component={Dashboard} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
