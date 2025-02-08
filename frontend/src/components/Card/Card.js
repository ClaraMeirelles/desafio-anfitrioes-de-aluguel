import React from 'react'
import { StyledCard, StyledImg, StyledInfo, StyledTitle } from './styled'

export function Card({ property }) {
    return (
        <StyledCard>
            <StyledImg src={`${property.imagem}?random=${property.id}`} alt={`imagem de ${property.nome}`} />
            <StyledInfo>
                <StyledTitle>
                    <h4>{property.nome}</h4>
                    <h4>R$ {property.precoNoite}</h4>
                </StyledTitle>
                <p>{property.localizacao}</p>
                <p>3 quartos | 2 banheiros | garagem</p>
            </StyledInfo>
        </StyledCard>
    )
}
