import { createContext, useContext, useState } from "react";

export const CommonModalContext = createContext();

export const useCommonModalContext = () => {
    return useContext(CommonModalContext);
}

export const CommonModalContextProvider = ({ children }) => {
    const [commonModalOpen, setCommonModalOpen] = useState(false);
    const [commonModalContent, setCommonModalContent] = useState(null);

    const resetModalContent = () => {
        setCommonModalOpen(false);
        setCommonModalContent(null);
    }

    const value = {
        commonModalOpen, setCommonModalOpen,
        commonModalContent, setCommonModalContent, resetModalContent
    }

    return <CommonModalContext.Provider value={{value}}>
        {children}
    </CommonModalContext.Provider>
}