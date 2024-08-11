import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useGetQuickNotes = () => {
    const [loadingQuickNotes, setLoadingQuickNotes] = useState(false);
    let data = null;

    const getQuickNotes = async () => {
        setLoadingQuickNotes(true);
        try {
            const result = await fetch(`/api/quick-notes/`);
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingQuickNotes(false);
        }
        return data;
    }
    return { loadingQuickNotes, getQuickNotes }
}

export default useGetQuickNotes;