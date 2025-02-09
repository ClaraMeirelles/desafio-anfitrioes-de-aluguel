import React, { useEffect, useState } from 'react';
import { HomeContainer, HomeControls, HomeLayout } from './styled';
import { Card } from '../../components/Card';

export default function Home({ changePage }) {
    const [properties, setProperties] = useState([])
    const [cities, setCities] = useState([])

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        fetch("http://localhost:5000/acomodacoes")
            .then((res) => res.json())
            .then((data) => {
                setProperties(data)
                const citiesList = Array.from(
                    new Set(data.map(property => property.localizacao))
                );
                setCities(citiesList)
            })
            .catch(() => alert("Erro ao buscar as acomodações. Por favor, recarregue a página."));
    };

    const filterAcomodationsByCity = (city) => {
        if (city) {
            fetch(`http://localhost:5000/acomodacoes?cidade=${city}`)
                .then((res) => res.json())
                .then((data) => {
                    setProperties(data)
                })
                .catch(() => {
                    alert("Erro ao buscar a cidade. Por favor, tente novamente mais tarde.")
                    fetchData()
                })
        } else {
            fetchData()
        }
    }

    const handleCityChange = (e) => {
        e.preventDefault();
        filterAcomodationsByCity(e.target.value)
    }

    return (
        <HomeContainer>
            <HomeControls>
                <h1>Acomodações</h1>
                <section>
                    <p>Filtrar Acomodações:</p>
                    <select name="city" onChange={handleCityChange}>
                        <option value={""}>Selecione a cidade</option>
                        {cities
                            .sort()
                            .map((city) => {
                                return <option key={city} value={city}>{city}</option>
                            })
                        }
                    </select>
                </section>
            </HomeControls>
            <HomeLayout>

                {properties.map((property) => <Card key={property.id} property={property} changePage={changePage} />)}
            </HomeLayout>
        </HomeContainer >
    )
}
