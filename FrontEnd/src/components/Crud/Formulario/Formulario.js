import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import './Formulario.css'

function Formulario() {

    const navigate = useNavigate();

    const [create, setCreate] = useState({
        model:'',
        brand:'',
        year:'',
        price:''
    }); 
    
    // Criando um novo registro
    const handleSubmit = async (e) => {
        e.preventDefault();
        e.target.reset();

        const newCardata = {
            model: create.model,
            brand: create.brand,
            year: create.year,
            price: create.price
        }
        axios.post('http://localhost:4000/create', newCardata); 
        navigate('/Crud/cardata');  

    }

    const handleChange = async (e) => {
        const {name, value} = e.target;
        setCreate(prevCreate => {
            return {
                ...prevCreate,
                [name]: value
            }
        })
    };
     
    return (
        <div>
            <Button 
                className="list-button" 
                variant="outline-dark"
                onClick={() => navigate("/Crud/cardata")}>
                Lista carros
            </Button>

            <h1 className="reg-title">Registro</h1>

            <form onSubmit={handleSubmit} className="form-input">     
                <div className="form-group">
                   <input className="input"
                        name="model" 
                        value={create.model} 
                        onChange={handleChange} 
                        placeholder="modelo" 
                    />
                </div>
                <br />
                <div className="form-group">
                    <input className="input"
                        name="brand" 
                        value={create.brand}
                        onChange={handleChange}  
                        placeholder="marca" 
                    />   
                </div>
                <br />
                <div className="form-group">
                    <input className="input"
                        name="year" 
                        value={create.year}
                        onChange={handleChange}  
                        placeholder="ano" 
                    />
                </div>
                <br />

                <div  className="form-group">
                    <input className="input"
                        name="price" 
                        value={create.price}
                        onChange={handleChange}  
                        placeholder="preço" 
                    />    
                </div>
                <br />
                <div>
                    <Button 
                        className="sub-buttom" 
                        variant="dark"
                        type="submit"
                        value="Registrar">
                        Registrar
                    </Button>    
                </div> 
            </form>
        </div>
    )    
}

export default Formulario;