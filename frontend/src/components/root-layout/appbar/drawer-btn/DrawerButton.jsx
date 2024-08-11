import { IconButton, Stack } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useMainDrawerContext } from '../../../../context/MainDrawerContext';

const DrawerButton = () => {
    const { setDrawerOpen } = useMainDrawerContext();

    return (
        <IconButton onClick={() => setDrawerOpen(prev => !prev)}>
            <MenuIcon />
        </IconButton>
    )
}

export default DrawerButton