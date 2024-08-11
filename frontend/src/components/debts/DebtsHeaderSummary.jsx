import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/DataContext'
import { LoadingBox } from '../../styles/main';
import { CircularProgress } from '@mui/material';
import HeaderTotals from '../common/header-totals/HeaderTotals';

const DebtsHeaderSummary = () => {
    const {value:{debts}} = useDataContext();
    const [totalAmount, setTotalAmount] = useState(debts?.reduce((sum, debt) => sum + debt.inDebtValue, 0) || null);

    useEffect(() => {
        setTotalAmount(debts?.reduce((sum, debt) => sum + debt.inDebtValue, 0));
    }, []);

    if (!debts) return <LoadingBox><CircularProgress /></LoadingBox>

    return (
        <>
        {debts && <HeaderTotals value1={debts?.length} value2={totalAmount} type='debts' /> }
        </>
    )
}

export default DebtsHeaderSummary