import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useDeleteService = () => {
    const [loadingDeleteService, setLoadingDeleteService] = useState(false);
    let data = null;

    const deleteService = async (serviceID) => {
        setLoadingDeleteService(true);
        try {
            const result = await fetch(`/api/services/delete/${serviceID}`, {
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
            setLoadingDeleteService(false);
        }
        return data?.result;
    }
    return { loadingDeleteService, deleteService }
}

export default useDeleteService;