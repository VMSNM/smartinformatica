import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../../styles/main';
import SaveIcon from '@mui/icons-material/Save';
import { ModalBoxSmall } from '../../../styles/modal';
import { useDataContext } from '../../../context/DataContext';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import FormActionBtn from '../../common/FormActionBtn';
import useGetProducts from '../../../hooks/products/useGetProducts';
import InputsProductForm from '../input-forms/InputsProductForm';
import useUpdateProduct from '../../../hooks/products/useUpdateProduct';

const UpdateProductForm = ({productInfo}) => {
    const { value: { setProducts }} = useDataContext();
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingUpdateProduct, updateProduct } = useUpdateProduct();
    const { getProducts } = useGetProducts();

    const [inputs, setInputs] = useState({
        input1: productInfo?.equipment || '', 
        input2: productInfo?.description || '',  
        input3: productInfo?.specifications || '',  
        input4: productInfo?.clientID || '', 
        input5: productInfo?.costPrice || '',
        input6: productInfo?.sellPrice || '',
        input7: productInfo?.notes || ''
    })

    const validateData = () => {
        if (inputs?.input2?.length < 5) return toast.error('Description must have at least 5 characters');
        handleUpdateProduct();
    }

    const handleUpdateProduct = async () => {
        const {input1, input2, input3, input4, input5, input6, input7} = inputs;
        await updateProduct(productInfo.id, input1, input2, input3, input4, input5, input6, input7);
        resetModalContent();
        const data = await getProducts();
        if (data) setProducts(data);
    }

    return (
    <>
    <ModalBoxSmall>
        <Stack mb={2}>
            <BodyTextTitle variant='subtitle1'>Update {productInfo?.description} Details</BodyTextTitle>
            <Divider />
        </Stack>
        
        <InputsProductForm inputs={inputs} setInputs={setInputs} />

        <FormActionBtn 
            title={'Update product'} 
            loading={loadingUpdateProduct} 
            icon={<SaveIcon />} 
            callbackFn={validateData} 
        />
    </ModalBoxSmall>
    </>
    )
}

export default UpdateProductForm;

