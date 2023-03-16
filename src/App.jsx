import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";

//Views
import Dashboard from "./views/dashboard";
import Signin from "./views/Signin";
import Signup from "./views/Signup";
import Stopwatch from "./views/Stopwatch";
import Weather from "./views/Weather";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
