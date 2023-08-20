import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/About";
import About from "./pages/About";
import Stores from "./pages/Stores";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShopingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Stores />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
