import React from 'react'
import ConfirmationQuestion from '../../../layouts/common/confirmation-question/ConfirmationQuestion';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import { useDataContext } from '../../../context/DataContext';
import useGetDebts from '../../../hooks/debts/useGetDebts';
import useDeleteDebt from '../../../hooks/debts/useDeleteDebt';

const DeleteDebt = ({debtID, debtDesc}) => {
    const { value: { setDebts }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingDeleteDebt, deleteDebt } = useDeleteDebt();
    const { getDebts } = useGetDebts();

    const handleDeleteDebt = async () => {
        const debt = await deleteDebt(debtID);
        resetModalContent();

        const data = await getDebts();
        if (data) setDebts(data);
    }

    return (
    <>
        <ConfirmationQuestion 
        question={`Sure you want to delete debt ${debtDesc}?`}
        alert='danger' 
        extraAlert={'You cannot undo this action'} 
        callbackFn1={handleDeleteDebt} 
        callbackFn2={resetModalContent} 
        loading={loadingDeleteDebt}
        />
    </>
    )
}

export default DeleteDebt