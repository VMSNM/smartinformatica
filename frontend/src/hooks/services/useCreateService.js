import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useCreateService = () => {
    const [loadingCreateService, setLoadingCreateService] = useState(false);

    const createService = async (equipment, description, clientID, price, status, notes) => {
        setLoadingCreateService(true);
        let data = null;
        const newService = {
            equipment,
            description,
            clientID,
            price, 
            status,
            notes
        }
        try {
            const result = await fetch(`/api/services/create`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json", "Access-Control-Allow-Origin": "+",
                },
                body: JSON.stringify(newService),
            });
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }   
            toast.success(data.message);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingCreateService(false);
        }
        return data?.result;
    }
    return { loadingCreateService, createService }
}

export default useCreateService;