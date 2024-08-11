import * as React from 'react';
import Modal from '@mui/material/Modal';
import CloseModalBtn from './CloseModalBtn';
import { useCommonModalContext } from '../../../context/CommonModalContext';
import { CommonModalContainer } from '../../../styles/modal';

export default function CommonModal() {

    const { value: { commonModalOpen, setCommonModalOpen, commonModalContent }} = useCommonModalContext();

    const handleClose = () => { 
        setCommonModalOpen(false);
    };

    return (
        <div>
        <Modal
            open={commonModalOpen}
            onClose={handleClose}
            aria-labelledby="Common Modal Window"
            aria-describedby="modal-modal-description"
            sx={{zIndex:998}}
        >
            <CommonModalContainer>
                { commonModalContent }
                <CloseModalBtn handleClose={handleClose} />
            </CommonModalContainer>
        </Modal>
        </div>
    );
}