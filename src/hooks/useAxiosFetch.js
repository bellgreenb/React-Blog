import {useState, useEffect} from 'react';
import api from '../api/posts';

const useAxiosFetch = (dataUrl) => {
    const [data, setData] = useState([]);
    const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        let isMounted = true; // Track if component is mounted
        const source = axios.CancelToken.source(); // Create a cancel token

        const fetchData = async (url) => {
            setIsLoading(true);
            try {
                const response = await api.get(url, {
                cancelToken: source.token
            });
                if (isMounted) {
                    setData(Array.isArray(response.data) ? response.data : []);
                    setFetchError(null);
                }
            } catch (err) {
                if (isMounted) {
                    setFetchError(err.message);
                    setData([]);
                }
            } finally {
                isMounted && setIsLoading(false);
            }
        }

        fetchData(dataUrl);

        const cleanUp = () => {
            isMounted = false; // Set to false when component unmounts
            source.cancel(); // Cancel the request if component unmounts
        }

        return cleanUp; // Return the cleanup function
    }, [dataUrl]); // Dependency array

    return { data, fetchError, isLoading };
}

export default useAxiosFetch;
