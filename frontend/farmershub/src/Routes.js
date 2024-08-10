import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import UserHome from './components/UserHome'
import ProtectedRoute from "./components/ProtectedRoutes";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element = {<ProtectedRoute/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<UserHome />}/>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
