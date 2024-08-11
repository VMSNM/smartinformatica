import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/DataContext'
import { LoadingBox } from '../../styles/main';
import { CircularProgress, Stack } from '@mui/material';
import HeaderTotals from '../common/header-totals/HeaderTotals';

const ServicesHeaderSummary = () => {
    const {value:{services}} = useDataContext();
    const [totalAmount, setTotalAmount] = useState(services?.reduce((sum, service) => sum + service.price, 0) || null);

    useEffect(() => {
        setTotalAmount(services?.reduce((sum, service) => sum + service.price, 0));
    }, []);

    if (!services) return <LoadingBox><CircularProgress /></LoadingBox>

    return (
        <>
        {services && <HeaderTotals value1={services?.length} value2={totalAmount} type='services' /> }
        </>
    )
}

export default ServicesHeaderSummary