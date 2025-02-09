import React, { useEffect, useState } from 'react'
import { StyledCard, StyledImg, StyledInfo, StyledTitle } from './styled'

export function Card({ property, changePage }) {
    const [like, setLike] = useState(false)
    const [favoriteAccomodation, setFavoriteAccomodation] =
        useState(JSON.parse(localStorage.getItem("favoriteAccomodation")) || [])

    useEffect(() => {
        setLike(favoriteAccomodation.includes(property.id))
    }, [property, favoriteAccomodation])

    const toggleFavorite = () => {
        const updatedFavorites = like
            ? favoriteAccomodation.filter(accomodationId => accomodationId !== property.id)
            : [...favoriteAccomodation, property.id]
        setFavoriteAccomodation(updatedFavorites)
        localStorage.setItem("favoriteAccomodation", JSON.stringify(updatedFavorites))
        setLike(!like);
    };

    return (
        <StyledCard>
            <section onClick={() => changePage('detalhes', property.id)}>
                <StyledImg src={`${property.imagem}?random=${property.id}`} alt={`imagem de ${property.nome}`} />
                <StyledInfo>
                    <StyledTitle>
                        <h4>{property.nome}</h4>
                        <h4>R$ {property.precoNoite}</h4>
                    </StyledTitle>
                    <p>{property.localizacao}</p>
                    <p>3 quartos | 2 banheiros | garagem</p>
                    <p>Ver mais detalhes</p>
                </StyledInfo>
            </section>
            <StyledInfo>
                <button onClick={toggleFavorite}>{like ? "Remover dos favoritos" : "Favoritar"}</button>
            </StyledInfo>
        </StyledCard>
    )
}
