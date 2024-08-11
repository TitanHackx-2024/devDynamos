import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import UserHome from './components/UserHome'
import NotFound from './components/NotFound'
import ProtectedRoute from "./components/ProtectedRoutes";
import Product from "./components/Products";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
      <Route element = {<ProtectedRoute/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<UserHome />}/>
          <Route path="/products" element={<Product />}/>
      </Route>
    </Routes>
  );
}

export default AppRoutes;
