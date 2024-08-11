import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useDeleteClient = () => {
    const [loadingDeleteClient, setLoadingDeleteClient] = useState(false);
    let data = null;

    const deleteClient = async (clientID) => {
        setLoadingDeleteClient(true);
        try {
            const result = await fetch(`/api/clients/delete/${clientID}`, {
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
            setLoadingDeleteClient(false);
        }
        return data?.result;
    }
    return { loadingDeleteClient, deleteClient }
}

export default useDeleteClient;