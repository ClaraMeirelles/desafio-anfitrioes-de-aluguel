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
