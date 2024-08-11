import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useDeleteProduct = () => {
    const [loadingDeleteProduct, setLoadingDeleteProduct] = useState(false);
    let data = null;

    const deleteProduct = async (productID) => {
        setLoadingDeleteProduct(true);
        try {
            const result = await fetch(`/api/products/delete/${productID}`, {
                method: "DELETE",
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json", "Access-Control-Allow-Origin": "+",
                }
            });
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }   
            toast.success(data.message);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingDeleteProduct(false);
        }
        return data?.result;
    }
    return { loadingDeleteProduct, deleteProduct }
}

export default useDeleteProduct;