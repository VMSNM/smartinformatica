import { Stack, styled } from "@mui/material";

export const PagesHeaderActionsContainer = styled(Stack)(({ theme }) => ({
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap:'10px',
    marginBottom:'10px',
    [theme.breakpoints.down('md')]: {
        flexDirection:'column',
        alignItems:'flex-start'
    }
}))

export const PagesHeaderTotalsContainer = styled(Stack)(({ theme }) => ({
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    gap: '20px',
    flexWrap:'wrap',
    [theme.breakpoints.down('sm')]: {
        gap: '10px',
    }
}))