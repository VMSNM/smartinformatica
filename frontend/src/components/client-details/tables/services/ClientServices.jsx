import React, { useEffect, useState } from 'react'
import ClientServicesTableData from './ClientServicesTableData'
import ShowTableToggle from '../show-table-toggle/ShowTableToggle'
import { Stack } from '@mui/material';
import { useClientDataContext } from '../../../../context/ClientDataContext';

const ClientServices = () => {
    const { value: {clientData}} = useClientDataContext();
    const { services } = clientData;
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        (!services || services.length === 0) ? setShowTable(false) : setShowTable(true);
    }, [services]);
    
    return (
        <Stack>
            <ShowTableToggle tableTitle="Services" showTable={showTable} setShowTable={setShowTable} />
            { showTable && <ClientServicesTableData /> } 
        </Stack>
    )
}

export default ClientServices