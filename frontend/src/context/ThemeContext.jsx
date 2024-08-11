import { createTheme } from "@mui/material";
import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const useThemeContext = () => {
    return useContext(ThemeContext);
}

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState(localStorage.getItem('mode') || 'dark');

    useEffect(() => { localStorage.setItem('mode', mode) }, [mode]);
    
    return <ThemeContext.Provider value={{mode, setMode}}>
        {children}
    </ThemeContext.Provider>
}