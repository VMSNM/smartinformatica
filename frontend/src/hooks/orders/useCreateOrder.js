import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useCreateOrder = () => {
    const [loadingCreateOrder, setLoadingCreateOrder] = useState(false);

    const createOrder = async (equipment, description, clientID, price, status, notes) => {
        setLoadingCreateOrder(true);
        let data = null;
        const newOrder = {
            equipment,
            description,
            clientID,
            price, 
            status,
            notes
        }
        try {
            const result = await fetch(`/api/orders/create`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json", "Access-Control-Allow-Origin": "+",
                },
                body: JSON.stringify(newOrder),
            });
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }   
            toast.success(data.message);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingCreateOrder(false);
        }
        return data?.result;
    }
    return { loadingCreateOrder, createOrder }
}

export default useCreateOrder;