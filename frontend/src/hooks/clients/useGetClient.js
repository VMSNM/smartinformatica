import { toast } from 'react-hot-toast';
import { useState } from 'react';

const useGetWatchlist = () => {
    const [loadingWatchlist, setLoadingWatchlist] = useState(false);
    let data = null;

    const getWatchlist = async (watchlistID) => {
        setLoadingWatchlist(true);
        try {
            const result = await fetch(`/api/watchlists/${watchlistID}`);
            data = await result.json();
            if (data.error) {
                throw new Error(data.error);
            }
        } catch (error) {
            toast.error(error);
        } finally {
            setLoadingWatchlist(false);
        }
        return data;
    }
    return { loadingWatchlist, getWatchlist }
}

export default useGetWatchlist;