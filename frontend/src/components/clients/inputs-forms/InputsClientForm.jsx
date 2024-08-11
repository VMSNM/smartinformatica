import { Stack } from '@mui/material'
import React from 'react'
import { FormInputText } from '../../../styles/main'

const InputsClientForm = ({inputs, setInputs}) => {
    const handleFormData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }
    return (
        <Stack gap={2}>
            <FormInputText 
                required 
                size='small' 
                type="text" 
                label="Full name" 
                name="input1" 
                value={inputs?.input1} 
                onChange={handleFormData} 
                placeholder={`Name...`} 
            />

            <FormInputText 
                required 
                size='small' 
                type="number" 
                label="Phone number" 
                name="input2" 
                value={inputs?.input2} 
                onChange={handleFormData} 
                placeholder={`Phone number...`} 
            />

            <FormInputText 
                size='small' 
                type="email" 
                label="Email" 
                name="input3" 
                value={inputs?.input3} 
                onChange={handleFormData} 
                placeholder={`Email...`} 
            />

            <FormInputText 
                multiline 
                rows={4} 
                size='small' 
                type="text" 
                label="Notes" 
                name="input4" 
                value={inputs?.input4} 
                onChange={handleFormData} 
                placeholder={`Notes...`} 
            />
        </Stack>
    )
}

export default InputsClientForm