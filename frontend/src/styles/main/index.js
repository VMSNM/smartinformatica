import styled from "@emotion/styled";
import { Colors } from "../theme";
import { Box, Stack, Button, TextField, Typography, Link, TableHead, TableRow, TableCell, tableCellClasses } from "@mui/material";

export const AppContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent:'flex-start',
    flexDirection: 'column',
    /* alignItems: 'center', */
    background: theme.palette.mode === 'dark' ? Colors.darkBack : Colors.primaryBG,
    width: '100vw',
    height: '100vh',
    overflowX: 'hidden',
    margin: '0 auto',
}))

// FORMS
export const FormContainer = styled(Stack)(({ theme }) => ({
    width: '380px',
    minHeight: '300px',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '25px',
    borderRadius: '10px',
    padding: '30px',
    background: theme.palette.mode === 'dark' ? Colors.secondaryBGdark : Colors.secondaryBG,
    color: theme.palette.mode === 'dark' ? Colors.white : Colors.black,
    [theme.breakpoints.down('sm')]: {
        width: '80vw',
        padding: '20px'
    }
}))

export const FormSubmitButton = styled(Button)(({ theme }) => ({
    width: '100%',
    height: '45px',
    fontSize: '16px',
    padding: '0 15px',
    background: Colors.primary,
    color: Colors.white,
}))

export const FormTitle = styled(Typography)(({ theme }) => ({
    fontSize: '28px',
    color: theme.palette.mode === 'dark' ? Colors.white : Colors.black,
    textAlign: 'center',
    /* marginBottom: '0px' */
}))

export const FormInputText = styled(TextField)(({ theme }) => ({
    width: '100%',
    /* color: theme.palette.mode === 'dark' ? Colors.white : Colors.black,
    textAlign: 'center' */
}))

export const FormLink = styled(Link)(({ theme }) => ({
    color: Colors.primary,
    cursor: 'pointer',
    textDecoration: 'none',
    ":hover": {
        color: theme.palette.mode === 'dark' ? Colors.dim_grey : Colors.primaryBG,
    }
}))

export const FormShowPasswordIcon = styled(Box)(({ theme }) => ({
    position: 'absolute', 
    right: '10px',
    top: '15px',
    cursor: 'pointer',
    ":hover": {
        fill: Colors.primary,
        color: Colors.primary,
    }
}))
// END FORMS

// TYPOGRAPHY
export const TitleText = styled(Typography, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme, wantedColor }) => ({
    fontWeight: 'bold',
    color: wantedColor
}));

export const SubtitleText = styled(Typography, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme, wantedColor }) => ({
    fontWeight: 'bold',
    color: wantedColor
}));

export const CaptionText = styled(Typography)(({ theme }) => ({
    fontWeight: '500',
}));


export const BodyTextTitle = styled(Typography, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme, wantedColor }) => ({
    fontWeight: 'bold',
    /* textShadow: `1px 1px 2px ${Colors.dark}`, */
    color: wantedColor
}));

export const BodyText = styled(Typography, {
    shouldForwardProp: (props) => props !== 'wantedColor'
})(({ theme, wantedColor }) => ({
    fontWeight: '500',
    color: wantedColor
}));

export const TypographySpan = styled(Typography)(({ theme }) => ({
    color: Colors.primary
}))

// END TYPOGRAPHY

// TABS FULL WIDTH
export const TabsFullWidthContainer = styled(Box)(({ theme }) => ({
    display:'flex',
    width: '100%',
    justifyContent:'space-around',
    overflowX:'auto',
}))
// END TABS FULL WIDTH

// SUBTABS
export const SubTabsContainer = styled(Stack)(({ theme }) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '10px',
    marginTop: '30px',
    marginBottom: '40px'
}))

export const SubTabBtn = styled(Button, {
    shouldForwardProp: (props) => props !== 'size'
})(({ theme, size }) => ({
    width: size || 'auto',
    backgroundColor: 'transparent',
    border: `1px solid ${Colors.primary}`,
    color: 'inherit',
    fontSize: '14px',
    textTransform: 'capitalize',
    transition: '.8s all',
    ':hover': {
        backgroundColor: Colors.primary,
        color: Colors.white
    },
    /* '& .subtab-active': {
        backgroundColor: Colors.secondary
    }, */
}))
// END SUBTABS

export const LoadingBox = styled(Box, {
    shouldForwardProp: (props) => props !== 'customHeight'
})(({ theme, customHeight }) => ({
    display:'flex',
    width: '100%',
    justifyContent:'center',
    height: customHeight || '50px'
}))

export const RateBox = styled(Box, {
    shouldForwardProp: (props) => props !== 'score'
})(({ theme, score }) => ({
    paddingBottom: '5px',
    paddingTop: '5px',
    borderRadius: '5px',
    maxWidth: '60%',
    marginLeft:'20%',
    marginRight:'20%',
    textShadow: `1px 1px 2px ${Colors.black}`,
    backgroundColor: score == 1 ? Colors.success : score == 0.75 ? Colors.success_light : score == 0.5 ? Colors.warning : score == 0.25 ? Colors.danger_light : Colors.danger,
    color: Colors.white
}))

export const TrueFalseBox = styled(Box, {
    shouldForwardProp: (props) => props !== 'trueFalse'
})(({ theme, trueFalse }) => ({
    paddingBottom: '5px',
    paddingTop: '5px',
    borderRadius: '5px',
    maxWidth: '60%',
    marginLeft:'20%',
    marginRight:'20%',
    textShadow: `1px 1px 2px ${Colors.black}`,
    backgroundColor: trueFalse === 'True' ? Colors.success : Colors.danger,
    color: Colors.white
}))

//TABLES
export const CustomTableHead = styled(TableHead)(({ theme }) => ({
    background: Colors.primary,
}));

export const CustomTableRow = styled(TableRow, {
    shouldForwardProp: (props) => props !== 'clickable' && props !== 'txtStyle'
})(({ theme, clickable, txtStyle }) => ({
    /* borderBottom: `1px solid ${Colors.border}`, */
    backgroundColor: theme.palette.mode === 'light' ? Colors.secondaryBG : Colors.secondaryBGdark,
    cursor: clickable || 'inherit',
    transition: '.6s all',

    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.mode === 'light' ? Colors.primaryBG : Colors.primaryBGdark,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
      '&:last-child td, &:last-child th': {
        border: 0,
      },

      ':hover': {
        backgroundColor: clickable === 'pointer' ? Colors.secondary : '',
        color: clickable === 'pointer' ? Colors.white : 'inherit'
    },
}));

export const CustomTableCell = styled(TableCell, {
    shouldForwardProp: (props) => (props !== 'bgColor' && props !== 'txtColor')
    })(({ theme, bgColor, txtColor }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: bgColor || Colors.primary,
            color: txtColor || Colors.white,
            fontWeight: 'bold',
            textShadow: `1px 1px 2px ${Colors.black}`,
            fontSize: '.8rem',
        },
        [`&.${tableCellClasses.body}`]: {
            backgroundColor: bgColor || 'inherit',
            color: txtColor || 'inherit',
            /* textShadow: theme.palette.mode === 'light' ? '' : `1px 1px 2px ${Colors.black}`, */
            fontSize: '.8rem',
        },
        fontWeight: '500',
    }
));

//END TABLES

//COMMON BUTTONS
export const FormPrimaryActionBtn = styled(Button, {
    shouldForwardProp: (props) => props !== 'size'
})(({ theme, size }) => ({
    textTransform:'capitalize', 
    /* marginTop:'10px',  */
    height:'40px',
    flexGrow:1,
    transition: '.8s all',
    ':hover': {
        /* backgroundColor: Colors.primary,
        color: Colors.white */
    },
}))
//END COMMON BUTTONS

//LINKS
export const DefaultColoredLink = styled(Link)(({ theme }) => ({
    color: Colors.primary,
    cursor: 'pointer',
    textDecoration: 'none',
    transition: '.7s all',
    ":hover": {
        color: Colors.secondary
    }
}))
//END LINKS