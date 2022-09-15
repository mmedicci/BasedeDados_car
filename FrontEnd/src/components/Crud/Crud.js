import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavbarCrud from "./Navbar";
import CardataCreate from "./CardataCreate/CardataCreate";
import CardataList from "./CardataList/CardataList";
import CardataUpdate from "./CardataUpdate/CardataUpdate";

function Crud() {
  return (    
    
      <div>
        <h1>Crud</h1>
          <NavbarCrud /> 
        </div>
  
  );
}

export default Crud;
