import React from 'react'
import ConfirmationQuestion from '../../../layouts/common/confirmation-question/ConfirmationQuestion';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import { useDataContext } from '../../../context/DataContext';
import useDeleteService from '../../../hooks/services/useDeleteService';
import useGetServices from '../../../hooks/services/useGetServices';

const DeleteService = ({serviceID, serviceDesc}) => {
    const { value: { setServices }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingDeleteService, deleteService } = useDeleteService();
    const { getServices } = useGetServices();

    const handleDeleteService = async () => {
        const service = await deleteService(serviceID);
        resetModalContent();

        const data = await getServices();
        if (data) setServices(data);
    }

    return (
    <>
        <ConfirmationQuestion 
        question={`Sure you want to delete service ${serviceDesc}?`}
        alert='danger' 
        extraAlert={'You cannot undo this action'} 
        callbackFn1={handleDeleteService} 
        callbackFn2={resetModalContent} 
        loading={loadingDeleteService}
        />
    </>
    )
}

export default DeleteService