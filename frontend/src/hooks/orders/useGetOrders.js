import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useGetOrders = () => {
    const [loadingOrders, setLoadingOrders] = useState(false);
    let data = null;

    const getOrders = async () => {
        setLoadingOrders(true);
        try {
            const result = await fetch(`/api/orders/all`);
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingOrders(false);
        }
        return data;
    }
    return { loadingOrders, getOrders }
}

export default useGetOrders;