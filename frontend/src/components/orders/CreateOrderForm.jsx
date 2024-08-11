import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../styles/main';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import toast from 'react-hot-toast';
import { useDataContext } from '../../context/DataContext';
import { useCommonModalContext } from '../../context/CommonModalContext';
import { ModalBoxSmall } from '../../styles/modal';
import FormActionBtn from '../common/FormActionBtn';
import useGetOrders from '../../hooks/orders/useGetOrders';
import useCreateOrder from '../../hooks/orders/useCreateOrder';
import InputsOrderForm from './input-forms/InputsOrderForm';

const CreateOrderForm = () => {
    const { value: { setOrders }} = useDataContext();  
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingCreateOrder, createOrder } = useCreateOrder();
    const { getOrders } = useGetOrders();

    const [inputs, setInputs] = useState({input1: '', input2: '', input3: '', input4: '', input5: '', input6: ''})
  
    const validateData = () => {
        if (inputs?.input2?.length < 5) return toast.error('Description must have at least 5 characters');
        handleCreateOrder();
    }

    const handleCreateOrder = async () => {
      const { input1, input2, input3, input4, input5, input6 } = inputs;
      await createOrder(input1, input2, input3, input4, input5, input6);
      resetModalContent();
      const data = await getOrders();
      if (data) setOrders(data);
    }

    return (
    <>
      <ModalBoxSmall>
          <Stack mb={2}>
              <BodyTextTitle variant='subtitle1'>Create new order</BodyTextTitle>
              <Divider />
          </Stack>
      
          <InputsOrderForm inputs={inputs} setInputs={setInputs} />

          <FormActionBtn 
              title={'Create order'} 
              loading={loadingCreateOrder} 
              icon={<AddCircleOutlineIcon />} 
              callbackFn={validateData} 
          />
      </ModalBoxSmall>
    </>
    )
}

export default CreateOrderForm;

