import React from 'react'
import { BodyText, FormPrimaryActionBtn } from '../../styles/main'
import { CircularProgress } from '@mui/material'

const FormActionBtn = ({title, loading, icon, callbackFn}) => {
    return (
        <FormPrimaryActionBtn
            title={title} 
            disabled={loading}
            variant="outlined" 
            startIcon={icon}
            onClick={callbackFn}
        >
            {loading ? <CircularProgress size="1.5rem" /> : <BodyText variant='body1'>{title}</BodyText> }
        </FormPrimaryActionBtn>
    )
}

export default FormActionBtn