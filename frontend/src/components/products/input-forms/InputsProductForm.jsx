import { Stack } from '@mui/material'
import React from 'react'
import { FormInputText } from '../../../styles/main'
import ClientsSelectBox from '../../common/ClientsSelectBox'
import EquipmentSelectBox from './EquipmentSelectBox'

const InputsProductForm = ({inputs, setInputs}) => {
    const handleFormData = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    }
    return (
        <Stack gap={2}>
            <EquipmentSelectBox inputs={inputs} setInputs={setInputs} inputName={'input1'} />

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

            <FormInputText 
                size='small' 
                type="text" 
                label="Specifications" 
                name="input3" 
                value={inputs?.input3} 
                onChange={handleFormData} 
                placeholder={`Specifications...`} 
            />

            <ClientsSelectBox inputs={inputs} setInputs={setInputs} inputValue={inputs?.input4} inputName={'input4'} clientOrSeller={'Seller'} />

            <Stack direction={'row'} alignItems={'center'} gap={2}>
                <FormInputText 
                    size='small' 
                    type="number" 
                    label="Cost Price" 
                    name="input5" 
                    value={inputs?.input5} 
                    onChange={handleFormData} 
                    placeholder={`Cost Price...`} 
                />

                <FormInputText 
                    size='small' 
                    type="number" 
                    label="Sell Price" 
                    name="input6" 
                    value={inputs?.input6} 
                    onChange={handleFormData} 
                    placeholder={`Sell Price...`} 
                />
            </Stack>

            <FormInputText 
                multiline 
                rows={2} 
                size='small' 
                type="text" 
                label="Notes" 
                name="input7" 
                value={inputs?.input7} 
                onChange={handleFormData} 
                placeholder={`Notes...`} 
            />
        </Stack>
    )
}

export default InputsProductForm