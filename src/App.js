import "./App.css";
import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
function App() {
  const [Islogin, setIsLogin] = useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <Navbar Islogin={Islogin} setIsLogin={setIsLogin} ></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup setIsLogin={setIsLogin} />} />
        <Route path="/Login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;
