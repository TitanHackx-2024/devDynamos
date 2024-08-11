import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import UserHome from './components/UserHome'
import ProtectedRoute from "./components/ProtectedRoutes";
import Product from "./components/Products";
import ProductOperations from "./components/ProductOperations";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
<<<<<<< HEAD
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route
        path="/products"
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />

      <Route
        path="/productops"
        element={
          <ProtectedRoute>
            <ProductOperations />
          </ProtectedRoute>
        }
      />
=======
      <Route element = {<ProtectedRoute/>}>
          <Route path="/" element={<Home />}/>
          <Route path="/home" element={<UserHome />}/>
          <Route path="/products" element={<Product />}/>
      </Route>
>>>>>>> 86bb6a8a4c17c3daf92dbe9240293c9228b0cb3f
    </Routes>
  );
}

export default AppRoutes;
