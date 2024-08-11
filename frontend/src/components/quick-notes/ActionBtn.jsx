import React, { useState } from 'react';
import SaveIcon from '@mui/icons-material/Save';
import { BodyText, FormPrimaryActionBtn } from '../../styles/main';
import { CircularProgress } from '@mui/material';
import useUpdateQuickNotes from '../../hooks/quick-notes/useUpdateQuickNotes';

const ActionBtn = ({quickNotes, changed, handleGetQuickNotes}) => {
    const { loadingUpdateQuickNotes, updateQuickNotes } = useUpdateQuickNotes();

    const handleUpdateQuickNotes = async () => {
        const data = await updateQuickNotes(quickNotes);
        if (data) handleGetQuickNotes();
    }

    return (
        <FormPrimaryActionBtn
            disabled={loadingUpdateQuickNotes || !changed}
            title={'Save changes'} 
            variant="outlined" 
            startIcon={<SaveIcon />}
            onClick={handleUpdateQuickNotes}
        >
            {loadingUpdateQuickNotes ? <CircularProgress size="1.5rem" /> : <BodyText variant='body2'>Save changes</BodyText> }
        </FormPrimaryActionBtn>
    )
}

export default ActionBtn