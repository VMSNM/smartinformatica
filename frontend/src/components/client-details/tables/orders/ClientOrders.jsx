import React, { useEffect, useState } from 'react'
import ShowTableToggle from '../show-table-toggle/ShowTableToggle'
import ClientOrdersTableData from './ClientOrdersTableData';
import { Stack } from '@mui/material';
import { useClientDataContext } from '../../../../context/ClientDataContext';

const ClientOrders = () => {
    const { value: {clientData}} = useClientDataContext();
    const { orders } = clientData;
    const [showTable, setShowTable] = useState(true);

    useEffect(() => {
        (!orders || orders.length === 0) ? setShowTable(false) : setShowTable(true);
    }, [orders]);

    return (
        <Stack>
            <ShowTableToggle tableTitle="Orders" showTable={showTable} setShowTable={setShowTable} />
            { showTable && <ClientOrdersTableData /> } 
        </Stack>
    )
}

export default ClientOrders