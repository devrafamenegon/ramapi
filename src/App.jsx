import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Search from "./components/Search";
import Details from "./components/Details";

import { PersonageProvider } from './providers/PersonageContext'

function App() {

  return (
    <PersonageProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </PersonageProvider>
  );
}

export default App;
