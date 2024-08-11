import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useCreateProduct = () => {
    const [loadingCreateProduct, setLoadingCreateProduct] = useState(false);

    const createProduct = async (equipment, description, specifications, clientID, costPrice, sellPrice, notes) => {
        setLoadingCreateProduct(true);
        let data = null;
        const newProduct = {
            equipment,
            description,
            specifications,
            clientID,
            costPrice, 
            sellPrice,
            notes
        }
        try {
            const result = await fetch(`/api/products/create`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json", "Access-Control-Allow-Origin": "+",
                },
                body: JSON.stringify(newProduct),
            });
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }   
            toast.success(data.message);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingCreateProduct(false);
        }
        return data?.result;
    }
    return { loadingCreateProduct, createProduct }
}

export default useCreateProduct;