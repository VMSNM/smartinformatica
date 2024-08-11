import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useDeleteDebt = () => {
    const [loadingDeleteDebt, setLoadingDeleteDebt] = useState(false);
    let data = null;

    const deleteDebt = async (debtID) => {
        setLoadingDeleteDebt(true);
        try {
            const result = await fetch(`/api/debts/delete/${debtID}`, {
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
            setLoadingDeleteDebt(false);
        }
        return data?.result;
    }
    return { loadingDeleteDebt, deleteDebt }
}

export default useDeleteDebt;