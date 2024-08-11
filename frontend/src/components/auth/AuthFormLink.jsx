import { Stack, Typography } from '@mui/material'
import React from 'react'
import { FormLink } from '../../styles/main'
import { useNavigate } from 'react-router-dom';

const AuthFormLink = ({txt1, txt2, link}) => {
    const navigate = useNavigate();
    return (
        <Stack direction={'row'} justifyContent={'flex-start'} alignItems={'center'} gap={1}>
            <Typography 
                variant="body1" 
                display={'flex'} 
                gap={1}
            >
                {txt1} <FormLink to='/login' onClick={() => navigate(`${link}`)}> {txt2} </FormLink>
            </Typography>
        </Stack>
    )
}

export default AuthFormLink