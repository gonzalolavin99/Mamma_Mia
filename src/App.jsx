import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bar from "./components/Bar";
import Home from "./views/Home";
import { PizzaProvider } from "./context/PizzaContext";
import Carro from "./views/Carro";
import Detalle from "./views/Detalle"; 
import './App.css';

const App = () => {
  return (
    <PizzaProvider>
      <Router>
        <Bar />
        <Routes>
          <Route path="/carro" element={<Carro />} />
          <Route path="/detalle/:id" element={<Detalle />} /> 
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </PizzaProvider>
  );
};

export default App;
