import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const EquipmentSelectBox = ({inputs, setInputs, inputName}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    };

    return (
        <FormControl sx={{ m: 0, my: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Equipment</InputLabel>
            <Select
                labelId="demo-select-small-label"
                size='small' 
                required
                id="demo-select-small"
                value={inputs.input1 || ''}
                name={inputName}
                label={`Equipment`}
                onChange={handleChange}
                sx={{fontSize:'14px', fontWeight:'500', paddingY: '5px'}}
            >
                <MenuItem value={'Laptop'}>Laptop</MenuItem>
                <MenuItem value={'Smartphone'}>Smartphone</MenuItem>
                <MenuItem value={'Tablet'}>Tablet</MenuItem>
            </Select>
        </FormControl>
    )
}

export default EquipmentSelectBox