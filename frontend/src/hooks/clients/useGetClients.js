import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useGetClients = () => {
    const [loadingClients, setLoadingClients] = useState(false);
    let data = null;

    const getClients = async () => {
        setLoadingClients(true);
        try {
            const result = await fetch(`/api/clients/all`);
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingClients(false);
        }
        return data;
    }
    return { loadingClients, getClients }
}

export default useGetClients;