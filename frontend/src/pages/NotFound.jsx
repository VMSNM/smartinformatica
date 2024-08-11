import { Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Colors } from '../styles/theme';
import { TypographySpan } from '../styles/main';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <>
            <Typography>Sorry, the page you're looking for was not found, </Typography>
            <TypographySpan 
                onClick={() => navigate('/')}
                sx={{ cursor: 'pointer', transition: '.7s',  ':hover': { color: Colors.secondary } }}
            >
                Return to Homepage
            </TypographySpan>
        </>
    )
}

export default NotFound