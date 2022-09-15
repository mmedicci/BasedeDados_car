import React from 'react';
import './Navbar.css';
import {
    BrowserRouter as Router, 
    Routes, 
    Route,
    Link,
} from 'react-router-dom';

function NavbarCrud() {
    return (     
        <nav className="navbar bg-dark container">
            <h4><Link className="link" to="/Crud/cardatacreate">Criar</Link></h4>
            <h4><Link className="link" to="/Crud/cardataupdate">Editar</Link></h4>
            <h4><Link className="link" to="/Crud/cardata">Listar</Link></h4>
        </nav>  
   )
}

export default NavbarCrud;