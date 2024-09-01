import logo from "./logo.svg";
import "./App.css";
// import { BrowserRouter as Router } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import UserDashboard from "./components/userdashboard/UserDashboard";
import ForgotPassword from "./components/forgotPassword/ForgotPassword";
import OTPVerificationPage from "./components/OTPVerificationPage/OTPVerificationPage";
import PricingPage from "./components/Pricing/PricingPage";

function App() {
  return (
    <>
    
   <PricingPage/>
    </>
  );
}

export default App;
