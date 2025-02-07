import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import { StyledDisplay } from './styled';
// import axios from "axios";

export default function Accommodation() {
    const [properties, setProperties] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/acomodacoes")
            .then((res) => res.json())
            .then((data) => setProperties(data))
            .catch((err) => console.error("Erro:", err));
    }, []);
    return (
        <div>
            <h1>Acomodações</h1>
            <StyledDisplay>
                {properties.map((property) => <Card key={property.id} property={property} />)}
            </StyledDisplay>
        </div>
    )
}
