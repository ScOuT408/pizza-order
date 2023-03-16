import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import ProductView from "./pages/ProductView";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import PrivateRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="font-poppins">
      <Toaster
        position="center-top"
        toastOptions={{
          style: {
            marginTop: "5rem",
            fontSize: "1rem",
          },
        }}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <Products />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <ProductView />
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
