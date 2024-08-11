import React, { useEffect, useState } from 'react'
import { FormInputText, LoadingBox } from '../../styles/main'
import ActionBtn from './ActionBtn'
import { CircularProgress, Stack } from '@mui/material'
import useGetQuickNotes from '../../hooks/quick-notes/useGetQuickNotes'

const QuickNotes = () => {
    const [quickNotes, setQuickNotes] = useState('');
    const [prevQuickNotes, setPrevQuickNotes] = useState('');
    const [changed, setChanged] = useState(false);

    const { loadingQuickNotes, getQuickNotes } = useGetQuickNotes();

    const handleGetQuickNotes = async () => {
        const data = await getQuickNotes();
        if (data) { 
            setQuickNotes(data);
            setPrevQuickNotes(data);
            setChanged(false);
        }
    }

    const handleFormData = (e) => {
        setQuickNotes(e.target.value);
        (e.target.value !== prevQuickNotes) ? setChanged(true) : setChanged(false);
    }

    useEffect(() => { handleGetQuickNotes(); }, []);

    return (
        <>
        { loadingQuickNotes && (
            <LoadingBox>
                <CircularProgress />
            </LoadingBox>
        )}
        { !loadingQuickNotes && (
            <Stack gap={2}>
                <FormInputText 
                    multiline 
                    rows={12} 
                    size='small' 
                    type="text" 
                    /* label="Quick notes"  */
                    name="quick-notes" 
                    value={quickNotes} 
                    onChange={handleFormData} 
                    placeholder={`Notes...`} 
                />
                <ActionBtn quickNotes={quickNotes} setQuickNotes={setQuickNotes} setPrevQuickNotes={setPrevQuickNotes} changed={changed} setChanged={setChanged} handleGetQuickNotes={handleGetQuickNotes} />
            </Stack>
        )}
        </>
    )
}

export default QuickNotes