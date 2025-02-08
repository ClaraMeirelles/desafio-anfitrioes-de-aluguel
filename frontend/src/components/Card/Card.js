import React, { useEffect, useState } from 'react'
import { StyledCard, StyledImg, StyledInfo, StyledTitle } from './styled'

export function Card({ property, changePage }) {
    const [like, setLike] = useState(false)
    const favoriteAccomodation = JSON.parse(window.localStorage.getItem("favoriteAccomodation")) || []
    useEffect(() => {
        favoriteAccomodation.map((accomodationId) => accomodationId === property.id && setLike(true))
    }, [])

    useEffect(() => {
        let filteredFavoriteAccomodation = favoriteAccomodation
        if (like && !favoriteAccomodation.includes(property.id)) {
            favoriteAccomodation.push(property.id)
        } else if (!like && favoriteAccomodation.includes(property.id)) {
            filteredFavoriteAccomodation = favoriteAccomodation.filter((accomodationId) => accomodationId !== property.id)
        }
        console.log(favoriteAccomodation)
        window.localStorage.setItem("favoriteAccomodation", JSON.stringify(filteredFavoriteAccomodation))
    }, [like])


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
            <p onClick={() => setLike(!like)}><strong>{like ? "Remover dos favoritos" : "Favoritar"}</strong></p>
        </StyledCard>
    )
}
