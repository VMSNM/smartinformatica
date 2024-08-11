import React, { useEffect } from 'react';
import { CircularProgress, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDataContext } from '../../context/DataContext';
import useGetClients from '../../hooks/clients/useGetClients';
import { LoadingBox } from '../../styles/main';

const ClientsSelectBox = ({inputs, setInputs, inputValue, inputName, clientOrSeller = 'Client'}) => {
    const { value: {clients, setClients}} = useDataContext();
    const { getClients } = useGetClients();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({...inputs, [name]: value});
    };

    const handleGetClients = async () => {
        const data = await getClients();
        if (data) setClients(data);
    }

    useEffect(() => {
        if (!clients) handleGetClients();
    }, []);

    if (!clients) return <LoadingBox><CircularProgress /></LoadingBox>

    return (
        <FormControl sx={{ m: 0, my: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">{clientOrSeller}</InputLabel>
            <Select
                labelId="demo-select-small-label"
                size='small' 
                required
                id="demo-select-small"
                value={inputValue || ''}
                name={inputName}
                label={clientOrSeller}
                disabled={clients?.length === 0 ? true : false}
                onChange={handleChange}
                sx={{fontSize:'14px', fontWeight:'500', paddingY: '5px'}}
            >
                { clients?.sort((a,b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0).map((element, idx) => (
                    <MenuItem key={idx} value={element._id}>{element.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export default ClientsSelectBox