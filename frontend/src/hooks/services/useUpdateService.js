import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useUpdateService = () => {
    const [loadingUpdateService, setLoadingUpdateService] = useState(false);

    const updateService = async (serviceID, equipment, description, clientID, price, status, notes) => {
        setLoadingUpdateService(true);
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
            const result = await fetch(`/api/services/update/${serviceID}`, {
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
            setLoadingUpdateService(false);
        }
        return data?.result;
    }
    return { loadingUpdateService, updateService }
}

export default useUpdateService;