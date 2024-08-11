import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { Colors } from '../../../styles/theme'
import { useMainDrawerContext } from '../../../context/MainDrawerContext'
import HomeIcon from '@mui/icons-material/Home';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaidIcon from '@mui/icons-material/Paid';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ConstructionIcon from '@mui/icons-material/Construction';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import './MainDrawer.css'
import { DrawerLinkContainer, DrawerOverlay } from '../../../styles/root-layout/maindrawer';
import { useThemeContext } from '../../../context/ThemeContext';

const MainDrawer = () => {
    const { drawerOpen, setDrawerOpen } = useMainDrawerContext();
    const { mode, setMode } = useThemeContext();

    return (
        <>
        {drawerOpen && <DrawerOverlay onClick={() => setDrawerOpen(false)}></DrawerOverlay>}
        <Stack 
            className={drawerOpen ? 'main-drawer main-drawer-active' : 'main-drawer'} 
            sx={ mode === 'dark' ? {background: Colors.secondaryBGdark, zIndex:998} : {background: Colors.secondaryBG, zIndex:998} } 
        >
            <Link to={'/'} title='Homepage'>
                <DrawerLinkContainer>
                    <HomeIcon />
                    <Typography variant='body2'>Home</Typography>
                </DrawerLinkContainer>
            </Link>
            <Link to={'/clients'} title='Clients'>
                <DrawerLinkContainer>
                    <AssignmentIndIcon />
                    <Typography variant='body2'>Clients</Typography>
                </DrawerLinkContainer>
            </Link>
            <Link to={'/orders'} title='Orders'>
                <DrawerLinkContainer>
                    <LibraryBooksIcon />
                    <Typography variant='body2'>Orders</Typography>
                </DrawerLinkContainer>
            </Link>
            <Link to={'/services'} title='Services'>
                <DrawerLinkContainer>
                    <ConstructionIcon />
                    <Typography variant='body2'>Services</Typography>
                </DrawerLinkContainer>
            </Link>

            <Link to={'/products'} title='Products'>
                <DrawerLinkContainer>
                    <ShoppingCartCheckoutIcon />
                    <Typography variant='body2'>Products</Typography>
                </DrawerLinkContainer>
            </Link>

            <Link to={'/debts'} title='Debts'>
                <DrawerLinkContainer>
                    <PaidIcon />
                    <Typography variant='body2'>Debts</Typography>
                </DrawerLinkContainer>
            </Link>

            <Divider variant='middle' sx={{marginTop: '10px', marginBottom: '10px'}} />
            
            <DrawerLinkContainer
                onClick={() => mode === 'dark' ? setMode('light') : setMode('dark')}
                title={ mode === 'dark' ?'Switch to Light Mode' : 'Switch to Dark Mode' }
                sx={{ cursor: 'pointer' }}
            >
                { mode === 'light' && (
                    <>
                        <LightModeIcon />
                        <Typography variant='body2'>Light Mode</Typography>
                    </>
                )}
                { mode === 'dark' && (
                    <>
                        <DarkModeIcon />
                        <Typography variant='body2'>Dark Mode</Typography>
                    </>
                )}
            </DrawerLinkContainer>
        </Stack>
        </>
    )
}

export default MainDrawer