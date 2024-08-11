import React, { useEffect, useState } from 'react'
import ShowTableToggle from '../show-table-toggle/ShowTableToggle'
import { Stack } from '@mui/material';
import ClientDebtsTableData from './ClientDebtsTableData';
import { useClientDataContext } from '../../../../context/ClientDataContext';

const ClientDebts = () => {
    const { value: {clientData}} = useClientDataContext();
    const { debts } = clientData;
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        (!debts || debts.length === 0) ? setShowTable(false) : setShowTable(true);
    }, [debts]);
    
    return (
        <Stack>
            <ShowTableToggle tableTitle="Debts" showTable={showTable} setShowTable={setShowTable} />
            { showTable && <ClientDebtsTableData /> } 
        </Stack>
    )
}

export default ClientDebts