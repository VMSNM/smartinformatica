import { styled, tableCellClasses } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Colors } from "../theme";

// TYPOGRAPHY
export const StyledDataGrid = styled(DataGrid, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme }) => ({
    boxShadow: 2,
    '&.MuiDataGrid-root': { // Works
        /* border: 'none', */
    },
    "& .MuiDataGrid-cell:focus-within": { // Works
        outline: 'none !important'
    },
    '.MuiDataGrid-columnSeparator': { // Works
        display: 'none',
    },
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: `${Colors.primary} !important`,
    },
    '& .MuiDataGrid-row': {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.mode === 'light' ? Colors.secondaryBG : Colors.secondaryBGdark,
        }
    },
    '& .MuiDataGrid-cell': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8rem',
        '&:nth-of-type(2)': {
            //color: Colors.secondary,
            justifyContent: 'flex-start',
        }
    },
    /* '& .MuiDataGrid-cell:hover': { // Dont work
        color: 'primary.main',
    }, */
}));