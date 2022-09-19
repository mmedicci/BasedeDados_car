import React from 'react';
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NavbarMain from "./Layouts/Navbar/Navbar";
import Home from "./components/Home/Home";
import SearchEngine from "./components/SearchEngine/SearchEngine";
import Contact from "./components/Contact/Contact";
import Crud from "./components/Crud/Crud";
import CardataList from './components/Crud/CardataList/CardataList';
function App() {
  return (   
    <div className="App">
      <BrowserRouter>
        <NavbarMain />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="SearchEngine" element={<SearchEngine />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Crud" element={<Crud />}></Route>          
          <Route path="Crud/cardata" element={<CardataList />} />         

          <Route path="*" element={<Navigate replace to="/" />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;