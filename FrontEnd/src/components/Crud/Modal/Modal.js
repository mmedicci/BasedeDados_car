import React, { useState } from 'react';
import { Button, Modal, Form  } from 'react-bootstrap';
import axios from 'axios';

function ModEditar() {

    const [show, setShow] = useState(false);
    

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [edit, setEdit] = useState({});
     
     // Editando um registro
    const handleChange = (e) => {
        const { name, value} = e.target;
        setEdit(prev => {
            return {
                ...prev,
                [name]: value,
            }
        })
    }

    const saveEdit = () => {
        axios.put(`/${edit._id}`, edit)
        .then(res => console.log(res))
        .catch(err => console.log(err));

        handleClose();
        window.location.reload();
    }
     
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Atualizar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Control className="form-control" 
                                placeholder="modelo"
                                name="model" 
                                value={edit.model ? edit.model:""}
                                onChange={handleChange} />
                            <Form.Control className="form-control" 
                                placeholder="marca"
                                name="brand" 
                                value={edit.brand ? edit.brand:""}
                                onChange={handleChange} />
                            <Form.Control className="form-control" 
                                placeholder="ano"
                                name="year" 
                                value={edit.year ? edit.year:""}
                                onChange={handleChange} />
                            <Form.Control className="form-control" 
                                placeholder="preço"
                                name="price" 
                                value={edit.price ? edit.price:""}
                                onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-success" onClick={saveEdit}>
                        Atualizar
                    </Button>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
        </>    
    )
}

export default ModEditar;
