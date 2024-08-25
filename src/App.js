import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import UserDashboard from "./components/userdashboard/UserDashboard";

function App() {
  return (
    <>
      <UserDashboard />
    </>
  );
}

export default App;
