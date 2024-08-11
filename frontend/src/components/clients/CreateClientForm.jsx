import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../../src/styles/main';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import toast from 'react-hot-toast';
import useCreateClient from '../../hooks/clients/useCreateClient';
import useGetClients from '../../hooks/clients/useGetClients';
import { useDataContext } from '../../context/DataContext';
import { useCommonModalContext } from '../../context/CommonModalContext';
import { ModalBoxSmall } from '../../styles/modal';
import FormActionBtn from '../common/FormActionBtn';
import InputsClientForm from './inputs-forms/InputsClientForm';

const CreateClientForm = () => {
    const { value: { setClients }} = useDataContext();  
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingCreateClient, createClient } = useCreateClient();
    const { getClients } = useGetClients();

    const [inputs, setInputs] = useState({input1: '', input2: '', input3: '', input4: ''})
  
    const validateData = () => {
        if (inputs?.input1?.length < 3) return toast.error('Client name must have at least 3 characters');
        if (inputs?.input2?.length < 9) return toast.error('Client number must have 9 digits');
        handleCreateClient();
    }

    const handleCreateClient = async () => {
      const { input1, input2, input3, input4 } = inputs;
      await createClient(input1, input2, input3, input4);
      resetModalContent();
      const data = await getClients();
      if (data) setClients(data);
    }

    return (
    <>
      <ModalBoxSmall>
          <Stack mb={2}>
              <BodyTextTitle variant='subtitle1'>Create new client</BodyTextTitle>
              <Divider />
          </Stack>
      
          <InputsClientForm inputs={inputs} setInputs={setInputs} />

          <FormActionBtn 
              title={'Create client'} 
              loading={loadingCreateClient} 
              icon={<AddCircleOutlineIcon />} 
              callbackFn={validateData} 
          />
      </ModalBoxSmall>
    </>
    )
}

export default CreateClientForm;

