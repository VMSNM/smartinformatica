import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useUpdateProduct = () => {
    const [loadingUpdateProduct, setLoadingProduct] = useState(false);

    const updateProduct = async (productID, equipment, description, specifications, clientID, costPrice, sellPrice, notes) => {
        setLoadingProduct(true);
        let data = null;
        const updatedData = {
            equipment,
            description,
            specifications,
            clientID,
            costPrice, 
            sellPrice,
            notes
        }
        try {
            const result = await fetch(`/api/products/update/${productID}`, {
                method: "PUT",
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json", "Access-Control-Allow-Origin": "+",
                },
                body: JSON.stringify(updatedData),
            });
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }   
            toast.success(data.message);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingProduct(false);
        }
        return data?.result;
    }
    return { loadingUpdateProduct, updateProduct }
}

export default useUpdateProduct;