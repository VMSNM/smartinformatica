import { Box, TextField, Typography, styled } from "@mui/material";
import { Colors } from "../theme";

export const MainAppbarContainer = styled(Box)(({ theme }) => ({
    position: 'fixed',
    zIndex: 997,
    top: 0,
    left: 0,
    display: 'flex',
    gap: '10px',
    justifyContent:'space-between',
    alignItems: 'center',
    background: theme.palette.mode === 'dark' ? Colors.secondaryBGdark : Colors.secondaryBG,
    width: '100vw',
    height: '60px',
    margin: '0 auto',
    padding: '10px',
    /* boxShadow: '0 4px 2px -2px gray' */
    borderBottom: `1px solid ${Colors.border}`
}));

export const MainAppbarLogo = styled('img')(({ theme }) => ({
    width: '25px',
    height: 'auto'
}));

export const MainAppbarTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.mode === 'dark' ? Colors.white : Colors.black,
    fontWeight: 600,
    fontSize: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textShadow: '1px 1px 2px #444',
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));

export const MainAppbarMobileTitle = styled(Typography)(({ theme }) => ({
    display: 'none',
    color: theme.palette.mode === 'dark' ? Colors.white : Colors.black,
    fontWeight: 600,
    fontSize: '20px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textShadow: '1px 1px 2px #444',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));


export const SearchBoxContainer = styled(Box)(({ theme }) => ({
    width: '400px',
    height: '30px',
    background: 'transparent',
    boxShadow: `0px 0px 3px ${Colors.primary}`,
    /* border: `2px solid`, */
    /* borderColor: theme.palette.mode === 'dark' ? Colors.white : Colors.primaryBG, */
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        width: '250px',
    }
}))

export const SearchField = styled(TextField)(({ theme }) => ({
    '.MuiInputLabel-root': {
        color: Colors.primary,
    },
    '.MuiInput-root': {
        fontSize: '.9rem',
        color: Colors.primary,
        [theme.breakpoints.up('md')]: {
            fontSize: '1rem'
        }
    },
    '.MuiInput-root::before': {
        borderBottom: `none`
    },
    padding: '0 30px 0 10px'
}))