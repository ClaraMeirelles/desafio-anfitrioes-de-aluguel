import React from 'react'
import Card from '../Card/Card';
import { StyledDisplay } from './styled';

export default function Accommodation({ properties }) {
    return (
        <div>
            <h1>Acomodações</h1>
            <StyledDisplay>
                {properties.map((property) => <Card key={property.id} property={property} />)}
            </StyledDisplay>
        </div>
    )
}
