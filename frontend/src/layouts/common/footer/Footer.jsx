import { Box, Stack } from '@mui/material'
import React from 'react'
import { Colors } from '../../../styles/theme'
import { useMainDrawerContext } from '../../../context/MainDrawerContext';
import { useThemeContext } from '../../../context/ThemeContext';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { BodyText, DefaultColoredLink } from '../../../styles/main';

const Footer = () => {
    const { drawerOpen } = useMainDrawerContext();
    const { mode } = useThemeContext();
    return (
        <Box 
            flexGrow={1} 
            overflow={'hidden'} 
            mt={6}
            borderTop={`1px solid ${Colors.border}`}
            className={drawerOpen ? 'footer-outlet footer-outlet-shrink' : 'footer-outlet'}
            sx={{ backgroundColor: mode === 'dark' ? Colors.secondaryBGdark : Colors.secondaryBG, marginBottom: 0 }} 
        >
            <DefaultColoredLink href={'http://www.smart-center.pt'} target="_blank">
                <Stack direction={'row'} gap={.5} alignItems={'center'} justifyContent={'center'}>
                    <CopyrightIcon />
                    <BodyText>Coded by Smart Informática</BodyText>
                </Stack>
            </DefaultColoredLink>
        </Box>
    )
}

export default Footer