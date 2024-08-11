import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoutes";
import Product from "./components/Products";
import ProductOperations from "./components/ProductOperations";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
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
    </Routes>
  );
}

export default AppRoutes;
