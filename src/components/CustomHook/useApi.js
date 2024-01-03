import { useState, useEffect } from 'react';
import callApi from '../CallApi'; // Import your utility function

const useApi = (url, postData = null) =>
{
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () =>
    {
        try
        {
            setLoading(true);
            const { data, error } = await callApi(url, postData);
            setData(data);
            setError(error);
        } finally
        {
            setLoading(false);
        }
    };

    useEffect(() =>
    {
        fetchData();
    }, [url, postData]);

    return { data, loading, error, fetchData };
};

export default useApi;
