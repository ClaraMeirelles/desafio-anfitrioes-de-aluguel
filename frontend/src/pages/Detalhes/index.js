import React, { useEffect, useState } from 'react'
import { Description, DetailPage, HighlightedText } from "./styled"
export default function Detalhes({ id }) {
    const [like, setLike] = useState(false)
    const [property, setProperty] = useState({})
    const favoriteAccomodation = JSON.parse(window.localStorage.getItem("favoriteAccomodation")) || []

    const fetchData = (id) => {
        fetch(`http://localhost:5000/acomodacoes/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setProperty(data)
            })
            .catch(() => alert("Erro ao buscar detalhes da acomodação. Por favor, tente novamente mais tarde."));
    };

    useEffect(() => {
        fetchData(id)
    }, [id]);

    useEffect(() => {
        favoriteAccomodation.includes(id) && setLike(true)
    }, [id])

    useEffect(() => {
        let updatedFavorites = [...favoriteAccomodation]
        if (like && !favoriteAccomodation.includes(id)) {
            updatedFavorites.push(property.id)
        } else if (!like && favoriteAccomodation.includes(property.id)) {
            updatedFavorites = favoriteAccomodation.filter((accomodationId) => accomodationId !== id)
        }
        console.log(favoriteAccomodation)
        window.localStorage.setItem("favoriteAccomodation", JSON.stringify(updatedFavorites))
    }, [like, id])

    return (
        <DetailPage>
            <div>
                <img src={`${property.imagem}?random=${property.id}`} alt={`imagem de ${property.nome}`} />
            </div>
            <Description>
                <div>
                    <h3>{property.nome}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales risus id diam venenatis, non euismod dolor convallis. Vestibulum bibendum blandit justo quis efficitur. Donec aliquet sapien id nulla tempor, ut scelerisque dui tristique. Donec vel massa pharetra, imperdiet justo at, scelerisque nunc. Maecenas quis erat dolor. Nam tincidunt leo est, et tempor metus pretium vitae. Curabitur ullamcorper massa tristique, viverra lacus a, dignissim mauris. Nunc posuere ante in mauris ultrices aliquam vitae vel arcu. Suspendisse potenti. Cras convallis semper augue. Aliquam tincidunt faucibus semper. Maecenas laoreet pharetra convallis. Suspendisse et nisi volutpat, finibus libero sit amet, eleifend massa. Etiam iaculis mauris vitae mauris mattis, id egestas leo tincidunt.</p>
                </div>
                <section>
                    <h3>R$ {property.precoNoite}</h3>
                    <h3>{property.localizacao}</h3>
                    <HighlightedText onClick={() => setLike(!like)}>{like ? "Remover dos favoritos" : "Favoritar"}</HighlightedText>
                </section>
                <p>3 quartos | 2 banheiros | garagem</p>
            </Description>
        </DetailPage>
    )
}
