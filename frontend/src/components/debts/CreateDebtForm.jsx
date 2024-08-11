import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../styles/main';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import toast from 'react-hot-toast';
import { useDataContext } from '../../context/DataContext';
import { useCommonModalContext } from '../../context/CommonModalContext';
import { ModalBoxSmall } from '../../styles/modal';
import FormActionBtn from '../common/FormActionBtn';
import useCreateDebt from '../../hooks/debts/useCreateDebt';
import useGetDebts from '../../hooks/debts/useGetDebts';
import InputsDebtForm from './input-forms/InputsDebtForm';

const CreateDebtForm = () => {
    const { value: { setDebts }} = useDataContext();  
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingCreateDebt, createDebt } = useCreateDebt();
    const { getDebts } = useGetDebts();

    const [inputs, setInputs] = useState({input1: '', input2: '', input3: '', input4: '', input5: '', input6: ''})
  
    const validateData = () => {
        if (inputs?.input2?.length < 5) return toast.error('Description must have at least 5 characters');
        handleCreateDebt();
    }

    const handleCreateDebt = async () => {
      const { input1, input2, input3, input4, input5, input6 } = inputs;
      await createDebt(input1, input2, input3, input4, input5, input6);
      resetModalContent();
      const data = await getDebts();
      if (data) setDebts(data);
    }

    return (
    <>
      <ModalBoxSmall>
          <Stack mb={2}>
              <BodyTextTitle variant='subtitle1'>Create new debt</BodyTextTitle>
              <Divider />
          </Stack>
      
          <InputsDebtForm inputs={inputs} setInputs={setInputs} />

          <FormActionBtn 
              title={'Create debt'} 
              loading={loadingCreateDebt} 
              icon={<AddCircleOutlineIcon />} 
              callbackFn={validateData} 
          />
      </ModalBoxSmall>
    </>
    )
}

export default CreateDebtForm;

