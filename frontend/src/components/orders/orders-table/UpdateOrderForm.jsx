import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../../styles/main';
import SaveIcon from '@mui/icons-material/Save';
import { ModalBoxSmall } from '../../../styles/modal';
import { useDataContext } from '../../../context/DataContext';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import FormActionBtn from '../../common/FormActionBtn';
import useGetOrders from '../../../hooks/orders/useGetOrders';
import InputsOrderForm from '../input-forms/InputsOrderForm';
import useUpdateOrder from '../../../hooks/orders/useUpdateOrder';

const UpdateOrderForm = ({orderInfo}) => {
    const { value: { setOrders }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingUpdateOrder, updateOrder } = useUpdateOrder();
    const { getOrders } = useGetOrders();

    const [inputs, setInputs] = useState({
        input1: orderInfo?.equipment || '', 
        input2: orderInfo?.description || '',  
        input3: orderInfo?.clientID || '', 
        input4: orderInfo?.price || '',
        input5: orderInfo?.status || '',
        input6: orderInfo?.notes || ''
    })

    const validateData = () => {
        if (inputs?.input2?.length < 5) return toast.error('Description must have at least 5 characters');
        handleUpdateOrder();
    }

    const handleUpdateOrder = async () => {
        const {input1, input2, input3, input4, input5, input6} = inputs;
        await updateOrder(orderInfo.id, input1, input2, input3, input4, input5, input6);
        resetModalContent();
        const data = await getOrders();
        if (data) setOrders(data);
    }

    return (
    <>
    <ModalBoxSmall>
        <Stack mb={2}>
            <BodyTextTitle variant='subtitle1'>Update {orderInfo?.description} Details</BodyTextTitle>
            <Divider />
        </Stack>
        
        <InputsOrderForm inputs={inputs} setInputs={setInputs} />

        <FormActionBtn 
            title={'Update order'} 
            loading={loadingUpdateOrder} 
            icon={<SaveIcon />} 
            callbackFn={validateData} 
        />
    </ModalBoxSmall>
    </>
    )
}

export default UpdateOrderForm;

