import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../styles/main';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import toast from 'react-hot-toast';
import { useDataContext } from '../../context/DataContext';
import { useCommonModalContext } from '../../context/CommonModalContext';
import { ModalBoxSmall } from '../../styles/modal';
import FormActionBtn from '../common/FormActionBtn';
import useGetServices from '../../hooks/services/useGetServices';
import InputsServiceForm from './input-forms/InputsServiceForm';
import useCreateService from '../../hooks/services/useCreateService';

const CreateServiceForm = () => {
    const { value: { setServices }} = useDataContext();  
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingCreateService, createService } = useCreateService();
    const { getServices } = useGetServices();

    const [inputs, setInputs] = useState({input1: '', input2: '', input3: '', input4: '', input5: '', input6: ''})
  
    const validateData = () => {
        if (inputs?.input2?.length < 5) return toast.error('Description must have at least 5 characters');
        handleCreateService();
    }

    const handleCreateService = async () => {
      const { input1, input2, input3, input4, input5, input6 } = inputs;
      await createService(input1, input2, input3, input4, input5, input6);
      resetModalContent();
      const data = await getServices();
      if (data) setServices(data);
    }

    return (
    <>
      <ModalBoxSmall>
          <Stack mb={2}>
              <BodyTextTitle variant='subtitle1'>Create new service</BodyTextTitle>
              <Divider />
          </Stack>
      
          <InputsServiceForm inputs={inputs} setInputs={setInputs} />

          <FormActionBtn 
              title={'Create service'} 
              loading={loadingCreateService} 
              icon={<AddCircleOutlineIcon />} 
              callbackFn={validateData} 
          />
      </ModalBoxSmall>
    </>
    )
}

export default CreateServiceForm;

