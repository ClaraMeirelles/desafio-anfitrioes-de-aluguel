import React, { useEffect, useState } from 'react';
import { HomeContainer, HomeMenu, StyledDisplay } from './styled';
import { Card } from '../../components/Card/Card';
// import axios from "axios";

export default function Home({ changePage }) {
    const [properties, setProperties] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/acomodacoes")
            .then((res) => res.json())
            .then((data) => {
                setProperties(data)
                const citiesList = Array.from(
                    new Set(data.map(property => property.localizacao))
                );
                setCities(citiesList)
            })
            .catch((err) => console.error("Erro:", err));
    }, []);

    const filterAcomodationsByCity = (city) => {
        if (city) {
            fetch(`http://localhost:5000/acomodacoes?cidade=${city}`)
                .then((res) => res.json())
                .then((data) => {
                    setProperties(data)
                })
                .catch((err) => console.error("Erro:", err));
        } else {
            fetch(`http://localhost:5000/acomodacoes`)
                .then((res) => res.json())
                .then((data) => {
                    setProperties(data)
                })
                .catch((err) => console.error("Erro:", err));
        }
    }

    const receivecity = (e) => {
        e.preventDefault();
        filterAcomodationsByCity(e.target.value)
    }
    console.log(cities)
    return (
        <HomeContainer>
            <HomeMenu>
                <h1>Acomodações</h1>
                <section>
                    <p>Filtrar Acomodações:</p>
                    <select name="city" onChange={receivecity}>
                        <option value={""}>Selecione a cidade</option>
                        {cities
                            .sort()
                            .map((city) => {
                                return <option key={city} value={city}>{city}</option>
                            })
                        }
                    </select>
                </section>
            </HomeMenu>
            <StyledDisplay>

                {properties.map((property) => <Card key={property.id} property={property} changePage={changePage} />)}
            </StyledDisplay>
        </HomeContainer >
    )
}
