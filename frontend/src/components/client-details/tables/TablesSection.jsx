import React from 'react'
import { CircularProgress, Stack } from '@mui/material';
import ClientServices from './services/ClientServices';
import ClientOrders from './orders/ClientOrders';
import ClientDebts from './debts/ClientDebts';
import { useClientDataContext } from '../../../context/ClientDataContext';
import { LoadingBox } from '../../../styles/main';

const TablesSection = () => {
  const { value: {clientData}} = useClientDataContext();
  const {orders, services, debts} = clientData;

  if (!orders || !services || !debts) return <LoadingBox><CircularProgress /></LoadingBox>

  return (
    <Stack mt={8} gap={2}>
      <ClientOrders />
      <ClientServices />
      <ClientDebts />
    </Stack>
  )
}

export default TablesSection