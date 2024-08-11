import { createContext, useContext, useEffect, useState } from "react";

export const MainDrawerContext = createContext();

export const useMainDrawerContext = () => {
    return useContext(MainDrawerContext);
}

export const MainDrawerContextProvider = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return <MainDrawerContext.Provider value={{drawerOpen, setDrawerOpen}}>
        {children}
    </MainDrawerContext.Provider>
}