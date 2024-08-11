import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDataContext } from '../../../../context/DataContext';
import { useAuthContext } from '../../../../context/AuthContext';
import { useEffect } from 'react';
import useGetClients from '../../../../hooks/clients/useGetClients';
import { BodyText, LoadingBox } from '../../../../styles/main';
import { Box, CircularProgress, Stack } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBoxClients() {
  const {authUser} = useAuthContext();
  const navigate = useNavigate();

  const { value: {clients}} = useDataContext();
  const { loadingClients, getClients } = useGetClients();

  const [clientSelected, setClientSelected] = useState(null);
  const [clientsList, setClientsList] = useState(null);

  const handleGetClients = async () => {
    const data = await getClients();
    if (data) {
      let sortedData = data?.sort((a,b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);
      setClientsList(sortedData);
    } 
  }

  const handleChange = (event, value) => {
    if (value) {
      setClientSelected(value.name);
      navigate(`/clients/${value._id}`);
      setClientSelected(null);
    } 
  }

  useEffect(() => {
    if (authUser) handleGetClients();
  }, [clients]);

  if (loadingClients || !clientsList) return <LoadingBox><CircularProgress /></LoadingBox>

  return (
    <Autocomplete
      size='small'
      id="size-small-standard"
      sx={{ width: 280, display:'flex' }}
      options={clientsList}
      value={clientSelected}
      autoHighlight
      getOptionLabel={(option) => option.name}
      onChange={handleChange} 
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <Stack direction={'row'} gap={.5} justifyContent={'space-between'} alignItems={'center'} width={'100%'}
            key={key}
            {...optionProps}
          >
            <BodyText sx={{width:'60%'}}>{option.name}</BodyText>
            <BodyText sx={{width:'10%'}}>-</BodyText>
            <BodyText sx={{width:'30%'}}>{option.phoneNumber}</BodyText>
          </Stack>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="search client..."
          inputProps={{
            ...params.inputProps,
            
          }}
        />
      )}
    />
  );
}