import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useCreateDebt = () => {
    const [loadingCreateDebt, setLoadingCreateDebt] = useState(false);
    const createDebt = async (type, description, clientID, inDebtValue, totalValue, notes) => {
        setLoadingCreateDebt(true);
        let data = null;
        const newDebt = {
            type,
            description,
            clientID,
            inDebtValue, 
            totalValue,
            notes
        }
        try {
            const result = await fetch(`/api/debts/create`, {
                method: "POST",
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json", "Access-Control-Allow-Origin": "+",
                },
                body: JSON.stringify(newDebt),
            });
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }   
            toast.success(data.message);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingCreateDebt(false);
        }
        return data?.result;
    }
    return { loadingCreateDebt, createDebt }
}

export default useCreateDebt;