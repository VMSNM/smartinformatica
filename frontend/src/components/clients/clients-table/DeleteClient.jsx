import React from 'react'
import ConfirmationQuestion from '../../../layouts/common/confirmation-question/ConfirmationQuestion';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import useDeleteClient from '../../../hooks/clients/useDeleteClient';
import useGetClients from '../../../hooks/clients/useGetClients';
import { useDataContext } from '../../../context/DataContext';
import { useNavigate } from 'react-router-dom';

const DeleteClient = ({clientID, clientName, goToClientsPage = false}) => {
    const navigate = useNavigate();
    const { value: { setClients }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingDeleteClient, deleteClient } = useDeleteClient();
    const { getClients } = useGetClients();

    const handleDeleteClient = async () => {
        const client = await deleteClient(clientID);
        resetModalContent();

        const data = await getClients();
        if (data) setClients(data);
        if (goToClientsPage) navigate('/clients');
    }

    return (
    <>
        <ConfirmationQuestion 
        question={`Sure you want to delete client ${clientName}?`}
        alert='danger' 
        extraAlert={'All related data will be left without a matching client. You cannot undo this action!'} 
        callbackFn1={handleDeleteClient} 
        callbackFn2={resetModalContent} 
        loading={loadingDeleteClient}
        />
    </>
    )
}

export default DeleteClient