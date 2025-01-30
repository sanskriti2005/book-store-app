import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import BookDetails from "./pages/Book.Details";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/books"
          element={
            <PrivateRoute>
              <Books />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/books/:id" element={<BookDetails/>}/>
      </Routes>
    </>
  );
}

export default App;
