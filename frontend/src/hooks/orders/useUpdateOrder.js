import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useUpdateOrder = () => {
    const [loadingUpdateOrder, setLoadingOrder] = useState(false);

    const updateOrder = async (orderID, equipment, description, clientID, price, status, notes) => {
        setLoadingOrder(true);
        let data = null;
        const updatedData = {
            equipment,
            description,
            clientID,
            price, 
            status,
            notes
        }
        try {
            const result = await fetch(`/api/orders/update/${orderID}`, {
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
            setLoadingOrder(false);
        }
        return data?.result;
    }
    return { loadingUpdateOrder, updateOrder }
}

export default useUpdateOrder;