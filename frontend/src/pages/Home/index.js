import React, { useEffect, useState } from 'react';
import { HomeContainer, HomeControls, HomeLayout } from './styled';
import { Card } from '../../components/Card';
import { useFetch } from '../../hooks/useFetch'
export default function Home({ changePage }) {
    const [properties, setProperties] = useState([])
    const [cities, setCities] = useState([])
    const [initialLoad, setInitialLoad] = useState(true)
    const { data, err, fetchData } = useFetch("/acomodacoes", [])

    const filterAcomodationsByCity = (city) => {
        if (city) {
            fetchData(`/acomodacoes?cidade=${city}`)
        } else {
            fetchData("/acomodacoes")
        }
    }

    const handleCityChange = (e) => {
        e.preventDefault();
        filterAcomodationsByCity(e.target.value)
    }


    useEffect(() => {
        setProperties(data)
    }, [data]);

    useEffect(() => {
        if (initialLoad && properties.length > 0) {
            setProperties(data);
            const citiesList = Array.from(
                new Set(data.map(property => property.localizacao))
            );
            setCities(citiesList);
            setInitialLoad(false);
        }
    }, [properties]);

    if (err) alert(err.erro, err.id);

    const handleSortChange = (e) => {
        const option = e.target.value;
        let sortedProperties = [...properties];
        switch (option) {
            case 'price-asc':
                sortedProperties.sort((a, b) => a.precoNoite - b.precoNoite);
                break;
            case 'price-desc':
                sortedProperties.sort((a, b) => b.precoNoite - a.precoNoite);
                break;
            case 'city':
                sortedProperties.sort((a, b) => a.localizacao.localeCompare(b.localizacao));
                break;
            default:
                break;
        }
        setProperties(sortedProperties);
    };

    return (
        <HomeContainer>
            <HomeControls>
                <div>
                    <p>Filtrar Acomodações:</p>
                    <select name="city" onChange={handleCityChange}>
                        <option value={""}>Cidade</option>
                        {cities
                            .map((city) => {
                                return <option key={city} value={city}>{city}</option>
                            })
                        }
                    </select>
                </div>
                <div>
                    <p>Ordenar por:</p>
                    <select name="sort" onChange={handleSortChange}>
                        <option value="">Selecione a opção</option>
                        <option value="price-asc">Preço (crescente)</option>
                        <option value="price-desc">Preço (decrescente)</option>
                        <option value="city">Cidade</option>
                    </select>
                </div>
            </HomeControls>
            <HomeLayout>

                {properties.map((property) => <Card key={property.id} property={property} changePage={changePage} />)}
            </HomeLayout>
        </HomeContainer >
    )
}
