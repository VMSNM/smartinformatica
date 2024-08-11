import React, { useEffect, useState } from 'react'
import { Button, Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../../styles/main';
import SaveIcon from '@mui/icons-material/Save';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import useGetClients from '../../../hooks/clients/useGetClients';
import FormActionBtn from '../../common/FormActionBtn';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import useUpdateClient from '../../../hooks/clients/useUpdateClient';
import InputsClientForm from '../../clients/inputs-forms/InputsClientForm';
import { useDataContext } from '../../../context/DataContext';
import { useClientDataContext } from '../../../context/ClientDataContext';
import DeleteClient from '../../clients/clients-table/DeleteClient';

const PersonalInfo = () => {
    const { value: { setClients }} = useDataContext();
    const { value: {clientSelected}} = useClientDataContext();
    const { value: { setCommonModalOpen, setCommonModalContent, resetModalContent }} = useCommonModalContext();

    const { loadingUpdateClient, updateClient } = useUpdateClient();
    const { getClients } = useGetClients();

    const [inputs, setInputs] = useState({input1: '', input2: '',  input3: '', input4: ''});

    const validateData = () => {
        if (inputs?.input1?.length < 3) return toast.error('Client name must have at least 3 characters');
        if (inputs?.input2?.length < 9) return toast.error('Client number must have 9 digits');
        handleUpdateClient();
    }

    const handleUpdateClient = async () => {
        const {input1, input2, input3, input4} = inputs;
        await updateClient(clientSelected.id || clientSelected._id, input1, input2, input3, input4);
        resetModalContent();
        const data = await getClients();
        if (data) setClients(data);
    }

    const handleDeleteClient = () => {
        setCommonModalContent(<DeleteClient clientID={clientSelected.id || clientSelected._id} clientName={clientSelected.name} goToClientsPage={true} />)
        setCommonModalOpen(true);
    }

    useEffect(() => {
        if (clientSelected) {
            setInputs({ 
                input1: clientSelected?.name, 
                input2: clientSelected?.phoneNumber, 
                input3: clientSelected?.email, 
                input4: clientSelected?.notes 
            })
        }
    }, [clientSelected]);

    return (
    <>
        <Stack mb={6}>
            <BodyTextTitle variant='subtitle1'>Personal Info</BodyTextTitle>
            <Divider />
        </Stack>
        <Stack gap={2}>
            <InputsClientForm inputs={inputs} setInputs={setInputs} />

            <Stack direction={'row'} gap={2} justifyContent={'space-between'} alignItems={'center'}>
                <Button 
                    title={'Delete client'}
                    variant="outlined" 
                    disabled={false}
                    startIcon={<DeleteForeverIcon />} 
                    sx={{textTransform:'none', height:'40px', flexGrow:1}}
                    onClick={handleDeleteClient}
                >
                    Delete client
                </Button>
                <FormActionBtn 
                    title={'Update client'} 
                    loading={loadingUpdateClient} 
                    icon={<SaveIcon />} 
                    callbackFn={validateData} 
                />
            </Stack>
        </Stack>
            
    </>
    )
}

export default PersonalInfo;

