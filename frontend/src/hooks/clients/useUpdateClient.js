import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useUpdateClient = () => {
    const [loadingUpdateClient, setLoadingUpdateClient] = useState(false);

    const updateClient = async (clientID, name, phoneNumber, email, notes) => {
        setLoadingUpdateClient(true);
        let data = null;
        const updatedData = {
            name,
            phoneNumber,
            email, 
            notes
        }
        try {
            const result = await fetch(`/api/clients/update/${clientID}`, {
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
            setLoadingUpdateClient(false);
        }
        return data?.result;
    }
    return { loadingUpdateClient, updateClient }
}

export default useUpdateClient;