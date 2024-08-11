import { Box, Stack, easing, styled } from "@mui/material";
import { Colors } from "../theme";
import zIndex from "@mui/material/styles/zIndex";

export const DrawerOverlay = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        position: 'absolute',
        width: '100vw',
        height: '100vh',
        top: 0,
        left: 0,
        backgroundColor: Colors.black,
        opacity: .8,
        zIndex: 997
    }
}));

export const DrawerLinkContainer = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: '10px',
    marginBottom: '10px',
    padding: '0 10px',
    height: '30px',
    alignItems: 'flex-end',
    color: theme.palette.mode === 'light' ?  `${Colors.shaft}` : `${Colors.white}`,
    transition: '.7s',
    ':hover': {
        color: `${Colors.primary}`
    }
}));