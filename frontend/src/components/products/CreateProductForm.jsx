import React, { useState } from 'react'
import { Divider, Stack } from '@mui/material';
import { BodyTextTitle } from '../../styles/main';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import toast from 'react-hot-toast';
import { useDataContext } from '../../context/DataContext';
import { useCommonModalContext } from '../../context/CommonModalContext';
import { ModalBoxSmall } from '../../styles/modal';
import FormActionBtn from '../common/FormActionBtn';
import useGetProducts from '../../hooks/products/useGetProducts';
import InputsProductForm from './input-forms/InputsProductForm';
import useCreateProduct from '../../hooks/products/useCreateProduct';

const CreateProductForm = () => {
    const { value: { setProducts }} = useDataContext();  
    const { value: { resetModalContent }} = useCommonModalContext();

    const { loadingCreateProduct, createProduct } = useCreateProduct();
    const { getProducts } = useGetProducts();

    const [inputs, setInputs] = useState({input1: '', input2: '', input3: '', input4: '', input5: '', input6: '', input7: ''})
  
    const validateData = () => {
        if (inputs?.input2?.length < 5) return toast.error('Description must have at least 5 characters');
        handleCreateProduct();
    }

    const handleCreateProduct = async () => {
      const { input1, input2, input3, input4, input5, input6, input7 } = inputs;
      await createProduct(input1, input2, input3, input4, input5, input6, input7);
      resetModalContent();
      const data = await getProducts();
      if (data) setProducts(data);
    }

    return (
    <>
      <ModalBoxSmall>
          <Stack mb={2}>
              <BodyTextTitle variant='subtitle1'>Create new product</BodyTextTitle>
              <Divider />
          </Stack>
      
          <InputsProductForm inputs={inputs} setInputs={setInputs} />

          <FormActionBtn 
              title={'Create product'} 
              loading={loadingCreateProduct} 
              icon={<AddCircleOutlineIcon />} 
              callbackFn={validateData} 
          />
      </ModalBoxSmall>
    </>
    )
}

export default CreateProductForm;

