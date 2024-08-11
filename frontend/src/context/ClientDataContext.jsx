import { createContext, useContext, useState } from "react";

export const ClientDataContext = createContext();

export const useClientDataContext = () => {
    return useContext(ClientDataContext);
}

export const ClientDataContextProvider = ({ children }) => {
    const [clientSelected, setClientSelected] = useState(null);
    const [clientData, setClientData] = useState({
        orders: null,
        services: null,
        debts: null
    })

    const value = { clientSelected, setClientSelected, clientData, setClientData }

    return <ClientDataContext.Provider value={{value}}>
        {children}
    </ClientDataContext.Provider>
}