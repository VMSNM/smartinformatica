import React from 'react'
import ConfirmationQuestion from '../../../layouts/common/confirmation-question/ConfirmationQuestion';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import { useDataContext } from '../../../context/DataContext';
import useDeleteOrder from '../../../hooks/orders/useDeleteOrder';
import useGetOrders from '../../../hooks/orders/useGetOrders';

const DeleteOrder = ({orderID, orderDesc}) => {
    const { value: { setOrders }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingDeleteOrder, deleteOrder } = useDeleteOrder();
    const { getOrders } = useGetOrders();

    const handleDeleteOrder = async () => {
        const order = await deleteOrder(orderID);
        resetModalContent();

        const data = await getOrders();
        if (data) setOrders(data);
    }

    return (
    <>
        <ConfirmationQuestion 
        question={`Sure you want to delete order ${orderDesc}?`}
        alert='danger' 
        extraAlert={'You cannot undo this action'} 
        callbackFn1={handleDeleteOrder} 
        callbackFn2={resetModalContent} 
        loading={loadingDeleteOrder}
        />
    </>
    )
}

export default DeleteOrder