import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle, FormInputText } from '../../../styles/main';
import SaveIcon from '@mui/icons-material/Save';
import { ModalBoxSmall } from '../../../styles/modal';
import { useDataContext } from '../../../context/DataContext';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import FormActionBtn from '../../common/FormActionBtn';
import InputsServiceForm from '../input-forms/InputsServiceForm';
import useUpdateService from '../../../hooks/services/useUpdateService';
import useGetServices from '../../../hooks/services/useGetServices';

const UpdateServiceForm = ({serviceInfo}) => {
    const { value: { setServices }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingUpdateService, updateService } = useUpdateService();
    const { getServices } = useGetServices();

    const [inputs, setInputs] = useState({
        input1: serviceInfo?.equipment || '', 
        input2: serviceInfo?.description || '',  
        input3: serviceInfo?.clientID || '', 
        input4: serviceInfo?.price || '',
        input5: serviceInfo?.status || '',
        input6: serviceInfo?.notes || ''
    })

    const validateData = () => {
        if (inputs?.input2?.length < 5) return toast.error('Description must have at least 5 characters');
        handleUpdateService();
    }

    const handleUpdateService = async () => {
        const {input1, input2, input3, input4, input5, input6} = inputs;
        await updateService(serviceInfo.id, input1, input2, input3, input4, input5, input6);
        resetModalContent();
        const data = await getServices();
        if (data) setServices(data);
    }

    return (
    <>
    <ModalBoxSmall>
        <Stack mb={2}>
            <BodyTextTitle variant='subtitle1'>Update {serviceInfo?.description} Data</BodyTextTitle>
            <Divider />
        </Stack>
        
        <InputsServiceForm inputs={inputs} setInputs={setInputs} />

        <FormActionBtn 
            title={'Update service'} 
            loading={loadingUpdateService} 
            icon={<SaveIcon />} 
            callbackFn={validateData} 
        />
    </ModalBoxSmall>
    </>
    )
}

export default UpdateServiceForm;

