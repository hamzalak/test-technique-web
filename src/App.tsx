import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { EquipementDescription } from "./app/Equipements/EquipementDescription";
import { EquipementsTable } from "./app/Equipements/EquipementsTable";
import { Home } from "./app/Home";

function App() {
  return (
    <Router>
      <div>
        <Link to="/equipements">Liste des Equipements</Link>
        <br />
        <Link to="/home">Home</Link>
        <br />
      </div>
      <Routes>
        <Route path="/equipements" element={<EquipementsTable />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/equipements/:equipementId"
          element={<EquipementDescription />}
        />
      </Routes>
    </Router>
  );
}
export default App;
