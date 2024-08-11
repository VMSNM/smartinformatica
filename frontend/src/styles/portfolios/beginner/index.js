import { Box, Stack, styled } from "@mui/material";

export const PortfolioHeaderActions = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: '10px',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
    }
}));

export const PortfolioHeaderActionsLeft = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
}));

export const BeginnerPortfolioHeaderBox = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '20px',
    marginTop: '20px',
    marginBottom: '30px',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '1fr',
    }
}));

export const SelectedPortfolioHeaderActions = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '20px',
    marginBottom:'10px',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '15px',
    }
}));