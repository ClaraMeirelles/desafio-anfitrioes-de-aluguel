import React, { useEffect, useState } from 'react'
import { HighlightedText, StyledCard, StyledImg, StyledInfo, StyledTitle } from './styled'

export function Card({ property, changePage }) {
    const [like, setLike] = useState(false)
    const favoriteAccomodation = JSON.parse(window.localStorage.getItem("favoriteAccomodation")) || []
    useEffect(() => {
        favoriteAccomodation.map((accomodationId) => accomodationId === property.id && setLike(true))
    }, [property])

    useEffect(() => {
        let updatedFavorites = [...favoriteAccomodation]
        if (like && !favoriteAccomodation.includes(property.id)) {
            updatedFavorites.push(property.id)
        } else if (!like && favoriteAccomodation.includes(property.id)) {
            updatedFavorites = favoriteAccomodation.filter((accomodationId) => accomodationId !== property.id)
        }
        window.localStorage.setItem("favoriteAccomodation", JSON.stringify(updatedFavorites))
    }, [like, property])


    return (
        <StyledCard>
            <article onClick={() => changePage('detalhes', property.id)}>
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
            </article>
            <StyledInfo>
                <HighlightedText onClick={() => setLike(!like)}>{like ? "Remover dos favoritos" : "Favoritar"}</HighlightedText>
            </StyledInfo>
        </StyledCard>
    )
}
