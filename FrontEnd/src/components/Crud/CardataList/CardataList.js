import React, { useState, useEffect } from 'react';

function CardataList() {
    const [list, setList] = useState([{
        model:'',
        brand:'',
        year:'',
        price:''
    }])

    useEffect(() => {
        fetch('/cardata').then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then(jsonRes => setList(jsonRes));
    })
    
    return (
        <div className="container">
            <h1>Cardata</h1>
            {list.map(lista =>
                <div>
                    <p>{lista.model}</p>
                    <p>{lista.brand}</p>
                    <p>{lista.year}</p>
                    <p>{lista.price}</p>
                </div>
            )}
        </div>
    )
}

export default CardataList;

