import { IconButton } from '@mui/material';
import React from 'react';
import AddCircleOutline from '@mui/icons-material/AddCircleOutline';
import { blue } from '@mui/material/colors';
import { Colors } from '../../styles/theme';
import { useCommonModalContext } from '../../context/CommonModalContext';

const AddNewElementBtn = ({title, modalContent}) => {
    const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

    const openModalCreateNewElement = () => {
        setCommonModalContent(modalContent);
        setCommonModalOpen(true);
    };

    return (
        <IconButton
            variant='contained'
            title={title} 
            onClick={openModalCreateNewElement}
        >
            <AddCircleOutline 
                sx={{
                    fontSize:'32px',
                    color: Colors.primary, 
                    transition: '.8s all', 
                    ':hover': { color: blue[500] }
                }}  
            />
        </IconButton>
    )
}

export default AddNewElementBtn