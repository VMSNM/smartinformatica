import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useGetClientByID = () => {
    const [loadingClient, setLoadingClient] = useState(false);
    let data = null;

    const getClient = async (clientID) => {
        setLoadingClient(true);
        try {
            const result = await fetch(`/api/clients/client/${clientID}`);
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingClient(false);
        }
        return data?.result;
    }
    return { loadingClient, getClient }
}

export default useGetClientByID;