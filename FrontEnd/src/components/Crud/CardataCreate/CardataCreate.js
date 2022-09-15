import React, {useState} from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function CardataCreate() {
    const [create, setCreate] = useState({
        model:'',
        brand:'',
        year:'',
        price:''
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setCreate(prevCreate => {
            return {
                ...prevCreate,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newCardata = {
            model: create.model,
            brand: create.brand,
            year: create.year,
            price: create.price
        }
        
        axios.post('http://localhost:4000/create', newCardata)
     }

    return (
        <div className="container">
            <h1>Registro</h1>
            <form onClick={handleClick} className="form-input" >     
                <div className="form-group">
                   <input className="form-control"
                        name="model" 
                        value={create.model} 
                        onChange={handleChange} 
                        placeholder="modelo" 
                    />
                </div>
                <br />
                <div className="form-group">
                    <input className="form-control"
                        name="brand" 
                        value={create.brand}
                        onChange={handleChange}  
                        placeholder="marca" 
                    />   
                </div>
                <br />

                <div className="form-group">
                    <input className="form-control"
                        name="year" 
                        value={create.year}
                        onChange={handleChange}  
                        placeholder="ano" 
                    />
                </div>
                <br />

                <div  className="form-group">
                    <input className="form-control"
                        name="price" 
                        value={create.price}
                        onChange={handleChange}  
                        placeholder="preço" 
                    />    
                </div>
                <br /> 
                <div className="Botão">
            <br />
            <Button variant="dark">Submit</Button> 
          </div>
            </form>
        </div>
    )    
}

export default CardataCreate;