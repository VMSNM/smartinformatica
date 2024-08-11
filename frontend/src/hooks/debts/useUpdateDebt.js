import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useUpdateDebt = () => {
    const [loadingUpdateDebt, setLoadingUpdateDebt] = useState(false);

    const updateDebt = async (debtID, type, description, clientID, inDebtValue, totalValue, notes) => {
        setLoadingUpdateDebt(true);
        let data = null;
        const updatedData = {
            type,
            description,
            clientID,
            inDebtValue, 
            totalValue,
            notes
        }
        try {
            const result = await fetch(`/api/debts/update/${debtID}`, {
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
            setLoadingUpdateDebt(false);
        }
        return data?.result;
    }
    return { loadingUpdateDebt, updateDebt }
}

export default useUpdateDebt;