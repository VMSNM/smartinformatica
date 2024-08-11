import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useGetServices = () => {
    const [loadingServices, setLoadingServices] = useState(false);
    let data = null;

    const getServices = async () => {
        setLoadingServices(true);
        try {
            const result = await fetch(`/api/services/all`);
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingServices(false);
        }
        return data;
    }
    return { loadingServices, getServices }
}

export default useGetServices;