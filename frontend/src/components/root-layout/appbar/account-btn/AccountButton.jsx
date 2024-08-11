import { Box, Divider, Menu, MenuItem, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthContext } from '../../../../context/AuthContext';
import useLogout from '../../../../hooks/auth/useLogout';
import { useCommonModalContext } from '../../../../context/CommonModalContext';
import CreateClientForm from '../../../clients/CreateClientForm';
import CreateServiceForm from '../../../services/CreateServiceForm';
import CreateOrderForm from '../../../orders/CreateOrderForm';
import CreateProductForm from '../../../products/CreateProductForm';
import CreateDebtForm from '../../../debts/CreateDebtForm';

const AccountButton = () => {
    const { value: {setCommonModalOpen, setCommonModalContent}} = useCommonModalContext();
    const { logout } = useLogout();

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleAddElement = (element) => {
        if (element === 'client') {
            setCommonModalContent(<CreateClientForm />);
            setCommonModalOpen(true);
            return;
        }
        if (element === 'order') {
            setCommonModalContent(<CreateOrderForm />);
            setCommonModalOpen(true);
            return;
        }
        if (element === 'service') {
            setCommonModalContent(<CreateServiceForm />);
            setCommonModalOpen(true);
            return;
        }
        if (element === 'product') {
            setCommonModalContent(<CreateProductForm />);
            setCommonModalOpen(true);
            return;
        }
        if (element === 'debt') {
            setCommonModalContent(<CreateDebtForm />);
            setCommonModalOpen(true);
            return;
        }
    }

    const handleLogout = async () => {
        setAnchorEl(null);
        await logout();
        navigate('/');
    }

    return (
        <>
        <AccountCircleIcon 
            sx={{width:'30px', height:'30px', cursor:'pointer'}}
            onClick={(e) => {e.preventDefault(); setAnchorEl(e.currentTarget)}} 
        /> 

        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{'aria-labelledby': 'basic-button'}} 
            sx={{ marginTop:'15px'}}
        >
            <MenuItem onClick={() => { setAnchorEl(null); handleAddElement('client'); }}>+ Add Client</MenuItem>
            <MenuItem onClick={() => { setAnchorEl(null); handleAddElement('order'); }}>+ Add Order</MenuItem>
            <MenuItem onClick={() => { setAnchorEl(null); handleAddElement('service'); }}>+ Add Service</MenuItem>
            <MenuItem onClick={() => { setAnchorEl(null); handleAddElement('product'); }}>+ Add Product</MenuItem>
            <MenuItem onClick={() => { setAnchorEl(null); handleAddElement('debt'); }}>+ Add Debt</MenuItem>
            <Divider variant='middle' />
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
        </>
    )
}

export default AccountButton;