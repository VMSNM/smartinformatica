import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/DataContext'
import { LoadingBox } from '../../styles/main';
import { CircularProgress } from '@mui/material';
import HeaderTotals from '../common/header-totals/HeaderTotals';

const ProductsHeaderSummary = () => {
    const {value:{products}} = useDataContext();
    const [totalAmount, setTotalAmount] = useState(products?.reduce((sum, product) => sum + product.sellPrice, 0) || null);

    useEffect(() => {
        setTotalAmount(products?.reduce((sum, product) => sum + product.sellPrice, 0));
    }, []);

    if (!products) return <LoadingBox><CircularProgress /></LoadingBox>

    return (
        <>
        {products && <HeaderTotals value1={products?.length} value2={totalAmount} type='products' /> }
        </>
    )
}

export default ProductsHeaderSummary