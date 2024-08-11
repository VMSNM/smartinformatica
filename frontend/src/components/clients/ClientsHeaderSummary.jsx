import React from 'react'
import { useDataContext } from '../../context/DataContext'
import { LoadingBox } from '../../styles/main';
import { CircularProgress } from '@mui/material';
import HeaderTotals from '../common/header-totals/HeaderTotals';

const ClientsHeaderSummary = () => {
    const {value:{clients}} = useDataContext();

    if (!clients) return <LoadingBox><CircularProgress /></LoadingBox>

    return (
        <>
        {clients && <HeaderTotals value1={clients?.length} type='clients' /> }
        </>
    )
}

export default ClientsHeaderSummary