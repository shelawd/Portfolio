import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
      </Routes>
    </Router>
  );
}