import { useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Outlet, useNavigate } from 'react-router-dom';
import MainAppBar from '../components/root-layout/appbar/MainAppbar';
import MainDrawer from '../components/root-layout/drawer/MainDrawer';
import { Box, Stack } from '@mui/material';
import { useMainDrawerContext } from '../context/MainDrawerContext';
import './RootLayout.css';
import Footer from './common/footer/Footer';
import CommonModal from './common/modal-window/CommonModal';

export default function RootLayout() {
    const {authUser} = useAuthContext();
    const navigate = useNavigate();
    const { drawerOpen } = useMainDrawerContext();

    useEffect(() => { authUser ? "" : navigate('/login'); }, [authUser]);

    return (
        <Box className="root-layout">
            <header>
                <MainAppBar />
            </header>
            <main>
                <Stack direction={'row'} width={'100%'} gap={'0px'} mt={'60px'}>
                    <MainDrawer />

                    <CommonModal />
                    
                    <Box flexGrow={1} overflow={'hidden'} className={drawerOpen ? 'root-outlet root-outlet-shrink' : 'root-outlet'}>
                        <Outlet context={{}}/>
                    </Box>
                </Stack>
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    )
}