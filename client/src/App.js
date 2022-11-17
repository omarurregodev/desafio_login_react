import React from "react";
import Login from "./Views/Login";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Home } from "./Views/Home";
import Logout from "./Views/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
