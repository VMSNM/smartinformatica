import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useGetDebts = () => {
    const [loadingDebts, setLoadingDebts] = useState(false);
    let data = null;

    const getDebts = async () => {
        setLoadingDebts(true);
        try {
            const result = await fetch(`/api/debts/all`);
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingDebts(false);
        }
        return data;
    }
    return { loadingDebts, getDebts }
}

export default useGetDebts;