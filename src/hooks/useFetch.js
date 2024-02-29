import { useEffect, useState } from 'react';
import { makeRequest } from '../makeRequest';

export default function  useFetch(url) {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async() => {

            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                setApiData(res.data.data)
                //setError(false);
                setLoading(true)
            } catch(err) {
                setError(true);
            }
            setLoading(false);
        };

        fetchData();

    }, [url]);

    return {  apiData, loading, error }
}


