import { useEffect, useState } from 'react'
import { BASE_URL } from '../assets/constants/baseUrl';

export function useFetch(path, initialState) {
    const [data, setData] = useState(initialState);
    const [err, setErr] = useState();
    const fetchData = (path) => {
        fetch(`${BASE_URL}${path}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res)
            })
            .catch((error) => {
                setErr(error)
            });
    };
    useEffect(() => {
        fetchData(path)
    }, [path]);
    return { data, err, fetchData };
};

