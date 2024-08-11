import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useGetProducts = () => {
    const [loadingProducts, setLoadingProducts] = useState(false);
    let data = null;

    const getProducts = async () => {
        setLoadingProducts(true);
        try {
            const result = await fetch(`/api/products/all`);
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingProducts(false);
        }
        return data;
    }
    return { loadingProducts, getProducts }
}

export default useGetProducts;