import { createTheme } from "@mui/material";
import { useThemeContext } from "../../context/ThemeContext";
import { Colors } from "../../styles/theme";

const useCreateTheme = () => {
    const { mode } = useThemeContext();
    const myTheme = createTheme({
        palette: {
            mode: mode,
            primary: {
                main: Colors.primary
            },
            secondary: {
                main: Colors.secondary
            }
        },
        typography: {
            "fontFamily": `"Montserrat", sans-serif`,
        },
        components: {
            MuiButton: {
                defaultProps: {
                    disableRipple: true,
                    /* disableElevation: true */
                },
            },
            MuiIconButton: {
                defaultProps: {
                    disableRipple: true,
                    /* disableElevation: true */
                },
            },
            MuiTypography: {
                defaultProps: {
                    fontWeight: '500',
                },
                styleOverrides: {
                    h1: { fontSize: '2.8rem' },
                    h2: { fontSize: '2.4rem' },
                    h3: { fontSize: '2rem' },
                    subtitle1: { fontSize: '1.2rem' },
                                       
                    subtitle2: {
                        fontSize: '.9rem'
                    },
                    caption: {
                        fontSize: '.8rem'
                    },
                    body1: {
                        fontSize: '.9rem'
                    },
                    body2: {
                        fontSize: '.8rem'
                    }
                },
            },
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        width: '250px',
                        background: Colors.primary,
                        color: Colors.secondary,
                        /* borderRadius: '0 100px 0 0', */
                        borderRight: `1px solid ${Colors.secondary}`
                    }
                }
            },
            MuiDivider: {
                styleOverrides: {
                    root: {
                        borderColor: mode === 'dark' ? Colors.border : Colors.shaft
                    }
                }
            },
            MuiTableCell: {
                styleOverrides: {
                    root: {
                        textAlign: 'center'
                    },
                }
            },
            MuiGrid:{
                styleOverrides: {
                    root: {
                        color: Colors.secondary
                    },
                },
            },
            MuiSelect:{
                styleOverrides: {
                    root: {
                        /* zIndex: 9999, */
                    },
                },
            }
        }
    })
    return { myTheme }
}

export default useCreateTheme;