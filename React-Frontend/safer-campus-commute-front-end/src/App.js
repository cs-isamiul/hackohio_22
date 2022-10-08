import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from './Components/Home';
import Profile from './Components/Profile';
import Register from './Components/Registration';
import Map from "./Components/map";

function App() {
  return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  </>
}

export default App;
