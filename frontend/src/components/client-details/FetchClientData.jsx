import React, { useEffect } from 'react'
import useGetClientByID from '../../hooks/clients/useGetClientByID';
import { useClientDataContext } from '../../context/ClientDataContext';
import { useParams } from 'react-router-dom';
import { useDataContext } from '../../context/DataContext';

const FetchClientData = () => {
    const { id } = useParams();
    const { value: { clientSelected, setClientData }} = useClientDataContext();
    const { value: { orders, services, debts }} = useDataContext();


    const { loadingClient, getClient } = useGetClientByID();

    const handleGetClientData = async () => {
        const data = await getClient(id);
        if (data) {
            handleClientData(data, setClientData, clientSelected);
        } 
    }

    useEffect(() => {
        handleGetClientData();
    }, [id, clientSelected, orders, services, debts]);

    return;
}

export default FetchClientData

const handleClientData = (data, setClientData, clientSelected) => {
    
    let filteredOrders = newData(data?.orders, clientSelected);
    let filteredServices = newData(data?.services, clientSelected);
    let filteredDebts = newData(data?.debts, clientSelected);

    setClientData({
        orders: filteredOrders,
        services: filteredServices,
        debts: filteredDebts,
    })
}

const newData = (array, clientSelected) => {
    let filteredArray = [];
    array.map(element => {
        filteredArray.push({
            ...element,
            clientInfo: clientSelected
        })
    });
    return filteredArray;
}