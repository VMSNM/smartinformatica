import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useCreateClient = () => {
    const [loadingCreateClient, setLoadingCreateClient] = useState(false);

    const createClient = async (name, phoneNumber, email, notes) => {
        setLoadingCreateClient(true);
        let data = null;
        const newClient = {
            name,
            phoneNumber,
            email,
            notes
        }
        try {
            const result = await fetch(`/api/clients/create`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json", "Access-Control-Allow-Origin": "+",
                },
                body: JSON.stringify(newClient),
            });
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }   
            toast.success(data.message);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingCreateClient(false);
        }
        return data?.result;
    }
    return { loadingCreateClient, createClient }
}

export default useCreateClient;