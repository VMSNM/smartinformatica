import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/DataContext'
import { LoadingBox } from '../../styles/main';
import { CircularProgress } from '@mui/material';
import HeaderTotals from '../common/header-totals/HeaderTotals';

const OrdersHeaderSummary = () => {
    const {value:{orders}} = useDataContext();
    const [totalAmount, setTotalAmount] = useState(orders?.reduce((sum, order) => sum + order.price, 0) || null);

    useEffect(() => {
        setTotalAmount(orders?.reduce((sum, order) => sum + order.price, 0));
    }, []);

    if (!orders) return <LoadingBox><CircularProgress /></LoadingBox>

    return (
        <>
        {orders && <HeaderTotals value1={orders?.length} value2={totalAmount} type='orders' /> }
        </>
    )
}

export default OrdersHeaderSummary