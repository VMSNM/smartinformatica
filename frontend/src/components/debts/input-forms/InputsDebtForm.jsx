import { Stack } from '@mui/material'
import React from 'react'
import { FormInputText } from '../../../styles/main'
import ClientsSelectBox from '../../common/ClientsSelectBox'
import TypeSelectBox from './TypeSelectBox'

const InputsDebtForm = ({inputs, setInputs}) => {
    const handleFormData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }
    return (
        <Stack gap={2}>
            <TypeSelectBox inputs={inputs} setInputs={setInputs} inputName={'input1'} />

            <FormInputText 
                required 
                size='small' 
                type="text" 
                label="Description" 
                name="input2" 
                value={inputs?.input2} 
                onChange={handleFormData} 
                placeholder={`Description...`} 
            />

            <ClientsSelectBox inputs={inputs} setInputs={setInputs} inputValue={inputs?.input3} inputName={'input3'} />

            <Stack direction={'row'} alignItems={'center'} gap={2}>
                <FormInputText 
                    size='small' 
                    type="number" 
                    label="In Debt" 
                    name="input4" 
                    value={inputs?.input4} 
                    onChange={handleFormData} 
                    placeholder={`In Debt...`} 
                />

                <FormInputText 
                    size='small' 
                    type="number" 
                    label="Total Debt" 
                    name="input5" 
                    value={inputs?.input5} 
                    onChange={handleFormData} 
                    placeholder={`Total Debt...`} 
                />
            </Stack>

            <FormInputText 
                multiline 
                rows={2} 
                size='small' 
                type="text" 
                label="Notes" 
                name="input6" 
                value={inputs?.input6} 
                onChange={handleFormData} 
                placeholder={`Notes...`} 
            />
        </Stack>
    )
}

export default InputsDebtForm