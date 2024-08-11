import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../../styles/main';
import SaveIcon from '@mui/icons-material/Save';
import { ModalBoxSmall } from '../../../styles/modal';
import { useDataContext } from '../../../context/DataContext';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import FormActionBtn from '../../common/FormActionBtn';
import useGetDebts from '../../../hooks/debts/useGetDebts';
import useUpdateDebt from '../../../hooks/debts/useUpdateDebt';
import InputsDebtForm from '../input-forms/InputsDebtForm';

const UpdateDebtForm = ({debtInfo}) => {
    const { value: { setDebts }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingUpdateDebt, updateDebt } = useUpdateDebt();
    const { getDebts } = useGetDebts();

    const [inputs, setInputs] = useState({
        input1: debtInfo?.type || '', 
        input2: debtInfo?.description || '',  
        input3: debtInfo?.clientID || '', 
        input4: debtInfo?.inDebtValue || '',
        input5: debtInfo?.totalValue || '',
        input6: debtInfo?.notes || ''
    })

    const validateData = () => {
        if (inputs?.input2?.length < 5) return toast.error('Description must have at least 5 characters');
        handleUpdateDebt();
    }

    const handleUpdateDebt = async () => {
        const {input1, input2, input3, input4, input5, input6} = inputs;
        await updateDebt(debtInfo.id, input1, input2, input3, input4, input5, input6);
        resetModalContent();
        const data = await getDebts();
        if (data) setDebts(data);
    }

    return (
    <>
    <ModalBoxSmall>
        <Stack mb={2}>
            <BodyTextTitle variant='subtitle1'>Update {debtInfo?.description} Details</BodyTextTitle>
            <Divider />
        </Stack>
        
        <InputsDebtForm inputs={inputs} setInputs={setInputs} />

        <FormActionBtn 
            title={'Update debt'} 
            loading={loadingUpdateDebt} 
            icon={<SaveIcon />} 
            callbackFn={validateData} 
        />
    </ModalBoxSmall>
    </>
    )
}

export default UpdateDebtForm;

