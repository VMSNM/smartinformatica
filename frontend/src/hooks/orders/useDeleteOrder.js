import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useDeleteOrder = () => {
    const [loadingDeleteOrder, setLoadingDeleteOrder] = useState(false);
    let data = null;

    const deleteOrder = async (orderID) => {
        setLoadingDeleteOrder(true);
        try {
            const result = await fetch(`/api/orders/delete/${orderID}`, {
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
            setLoadingDeleteOrder(false);
        }
        return data?.result;
    }
    return { loadingDeleteOrder, deleteOrder }
}

export default useDeleteOrder;