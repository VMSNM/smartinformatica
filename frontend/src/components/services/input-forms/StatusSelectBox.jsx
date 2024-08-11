import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const StatusSelectBox = ({inputs, setInputs, inputName}) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    };

    return (
        <FormControl sx={{ m: 0, my: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Status</InputLabel>
            <Select
                labelId="demo-select-small-label"
                size='small' 
                required
                id="demo-select-small"
                value={inputs.input5 || ''}
                name={inputName}
                label={`Status`}
                onChange={handleChange}
                sx={{fontSize:'14px', fontWeight:'500', paddingY: '5px'}}
            >
                <MenuItem value={'Finished'}>Finished</MenuItem>
                <MenuItem value={'Pending'}>Pending</MenuItem>
            </Select>
        </FormControl>
    )
}

export default StatusSelectBox