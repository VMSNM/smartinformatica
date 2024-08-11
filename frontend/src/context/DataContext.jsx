import { createContext, useContext, useState } from "react";

export const DataContext = createContext();

export const useDataContext = () => {
    return useContext(DataContext);
}

export const DataContextProvider = ({ children }) => {
    const [clients, setClients] = useState(null);
    const [orders, setOrders] = useState(null);
    const [services, setServices] = useState(null);
    const [products, setProducts] = useState(null);
    const [debts, setDebts] = useState(null);

    const value = { clients, setClients, orders, setOrders, services, setServices, products, setProducts, debts, setDebts }

    return <DataContext.Provider value={{value}}>
        {children}
    </DataContext.Provider>
}