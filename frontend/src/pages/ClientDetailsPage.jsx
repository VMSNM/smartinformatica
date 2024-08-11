import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useDataContext } from '../context/DataContext';
import { ClientDetailsBox, ClientDetailsSection1 } from '../styles/main/client-details';
import LayoutTitle from '../layouts/common/LayoutTitle';
import { CircularProgress, Stack } from '@mui/material';
import { LoadingBox } from '../styles/main';
import useGetClients from '../hooks/clients/useGetClients';
import FetchClientData from '../components/client-details/FetchClientData';
import TablesSection from '../components/client-details/tables/TablesSection';
import { useClientDataContext } from '../context/ClientDataContext';
import Summary from '../components/client-details/summary/Summary';
import PersonalInfo from '../components/client-details/personal-info/PersonalInfo';

const ClientDetailsPage = () => {
    const { id } = useParams();
    const { value: {clients, setClients}} = useDataContext();
    const { value: {clientSelected, setClientSelected}} = useClientDataContext();
    const { loadingClients, getClients } = useGetClients();


    const handleGetClients = async () => {
        const data = await getClients();
        if (data) {
            setClients(data);
            let client = data?.find(element => element._id === id);
            if (client) setClientSelected(client);
        } 
    }

    useEffect(() => {
        if (clients) {
            let client = clients?.find(element => element._id === id);
            if (client) setClientSelected(client);
            return;
        }
        handleGetClients();
    }, [id]);

    return (
        <>
        { loadingClients || !clientSelected && <LoadingBox><CircularProgress /></LoadingBox> }
        { !loadingClients && clientSelected && (
            <>
            <Stack mb={2}>
                <LayoutTitle title={`${clientSelected?.name} `} titleSpan={'Details'} />
            </Stack>

            <ClientDetailsSection1>
                <ClientDetailsBox>
                    <PersonalInfo />
                </ClientDetailsBox>

                <ClientDetailsBox>
                    <Summary />
                </ClientDetailsBox>
            </ClientDetailsSection1>

            <FetchClientData />

            <TablesSection />
            </>
        )}
        </>
    )
}

export default ClientDetailsPage