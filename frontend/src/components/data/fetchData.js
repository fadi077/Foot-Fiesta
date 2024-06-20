import { useState, useEffect } from "react";

export const useFetchAllProducts = () => {

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchAllProducts = async () => {

            try {
                const response = await fetch(`/api/products`);
                if (response.ok) {
                    const data = await response.json();
                    setProducts(data);
                    setIsLoading(false);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error(error);
            }

        };

        fetchAllProducts();
        
    }, []);

    return { products, isLoading };
};
