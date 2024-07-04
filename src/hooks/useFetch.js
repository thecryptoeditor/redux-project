import { useEffect, useState } from 'react';

export const useFetch = (url) => {

    const [apiResponse, setApiResponse] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        // Fetching data from a get API
        const getProductList = async () => { 
            
            try {
                
                let response = await fetch(url);
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                let data = await response.json();
                
                setApiResponse(data);

            }
            catch(err) {
                console.log(err);
                setError(err);
            }
            
            setLoading(false);
        }
        
        getProductList();
        
    }, [url]);

    return [apiResponse, loading, error];

}

export default useFetch;