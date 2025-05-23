import React, { useEffect, useState } from 'react';

export const useFetchWithNotFound = (url) => {
    const [data, setData] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false;

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();

                if (!isCancelled) {
                    if (json.error) {
                        setNotFound(true);
                    } else {
                        setData(json);
                    }
                }
            } catch (error) {
                if (!isCancelled) setNotFound(true);
            } finally {
                if (!isCancelled) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isCancelled = true;
        };
    }, [url]);

    return { data, notFound, loading };
};

export default useFetchWithNotFound;
