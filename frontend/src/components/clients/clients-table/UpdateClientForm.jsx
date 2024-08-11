import React, { useState } from 'react'
import { Button, Divider, Stack } from '@mui/material';
import { BodyTextTitle, FormInputText } from '../../../styles/main';
import SaveIcon from '@mui/icons-material/Save';
import { ModalBoxSmall } from '../../../styles/modal';
import { useDataContext } from '../../../context/DataContext';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import useGetClients from '../../../hooks/clients/useGetClients';
import FormActionBtn from '../../common/FormActionBtn';
import useUpdateClient from '../../../hooks/clients/useUpdateClient';
import InputsClientForm from '../inputs-forms/InputsClientForm';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useNavigate } from 'react-router-dom';

const UpdateClientForm = ({clientInfo}) => {
    const navigate = useNavigate();
    const { value: { setClients }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingUpdateClient, updateClient } = useUpdateClient();
    const { getClients } = useGetClients();

    const [inputs, setInputs] = useState({
        input1: clientInfo?.name || '', 
        input2: clientInfo?.phoneNumber || '',  
        input3: clientInfo?.email || '', 
        input4: clientInfo?.notes || ''
    })

    const validateData = () => {
        if (inputs?.input1?.length < 3) return toast.error('Client name must have at least 3 characters');
        if (inputs?.input2?.length < 9) return toast.error('Client number must have 9 digits');
        handleUpdateClient();
    }

    const handleUpdateClient = async () => {
        const {input1, input2, input3, input4} = inputs;
        await updateClient(clientInfo.id || clientInfo._id, input1, input2, input3, input4);
        resetModalContent();
        const data = await getClients();
        if (data) setClients(data);
    }

    const navigateToClientDetails = () => {
        resetModalContent();
        clientInfo.id ? navigate(`/clients/${clientInfo.id}`) : navigate(`/clients/${clientInfo._id}`);
    }

    return (
    <>
    <ModalBoxSmall>
        <Stack mb={2}>
            <BodyTextTitle variant='subtitle1'>Update {clientInfo?.name} Data</BodyTextTitle>
            <Divider />
        </Stack>
        
        <InputsClientForm inputs={inputs} setInputs={setInputs} />

        <Stack direction={'row'} gap={2} justifyContent={'space-between'} alignItems={'center'}>
            <Button 
                title={'Check client services, orders and debts'}
                variant="outlined" 
                disabled={loadingUpdateClient}
                startIcon={<RemoveRedEyeIcon />} 
                sx={{textTransform:'none', height:'40px', flexGrow:1}}
                onClick={navigateToClientDetails}
            >
                Check Details
            </Button>

            <FormActionBtn 
                title={'Update client'} 
                loading={loadingUpdateClient} 
                icon={<SaveIcon />} 
                callbackFn={validateData} 
            />
            
        </Stack>
    </ModalBoxSmall>
    </>
    )
}

export default UpdateClientForm;

