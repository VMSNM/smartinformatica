import React from 'react'
import ConfirmationQuestion from '../../../layouts/common/confirmation-question/ConfirmationQuestion';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import { useDataContext } from '../../../context/DataContext';
import useGetProducts from '../../../hooks/products/useGetProducts';
import useDeleteProduct from '../../../hooks/products/useDeleteProduct';

const DeleteProduct = ({productID, productDesc}) => {
    const { value: { setProducts }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingDeleteProduct, deleteProduct } = useDeleteProduct();
    const { getProducts } = useGetProducts();

    const handleDeleteProduct = async () => {
        const product = await deleteProduct(productID);
        resetModalContent();

        const data = await getProducts();
        if (data) setProducts(data);
    }

    return (
    <>
        <ConfirmationQuestion 
        question={`Sure you want to delete product ${productDesc}?`}
        alert='danger' 
        extraAlert={'You cannot undo this action'} 
        callbackFn1={handleDeleteProduct} 
        callbackFn2={resetModalContent} 
        loading={loadingDeleteProduct}
        />
    </>
    )
}

export default DeleteProduct