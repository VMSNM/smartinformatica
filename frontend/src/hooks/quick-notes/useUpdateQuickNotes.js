import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useUpdateQuickNotes = () => {
    const [loadingUpdateQuickNotes, setLoadingUpdateQuickNotes] = useState(false);

    const updateQuickNotes = async (notes) => {
        setLoadingUpdateQuickNotes(true);
        let data = null;
        const updatesNotes = { notes }
        try {
            const result = await fetch(`/api/quick-notes/`, {
                method: "PUT",
                crossDomain: true,
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json", "Access-Control-Allow-Origin": "+",
                },
                body: JSON.stringify(updatesNotes),
            });
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }   
            toast.success(data.message);
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingUpdateQuickNotes(false);
        }
        return data?.result;
    }
    return { loadingUpdateQuickNotes, updateQuickNotes }
}

export default useUpdateQuickNotes;