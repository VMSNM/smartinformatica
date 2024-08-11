import { BodyText, BodyTextTitle, LoadingBox } from '../styles/main';
import { CircularProgress, Stack } from '@mui/material';
import { useEffect } from 'react';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AddNewElementBtn from '../components/common/AddNewElementBtn';
import LayoutTitle from '../layouts/common/LayoutTitle';
import { useDataContext } from '../context/DataContext';
import useGetOrders from '../hooks/orders/useGetOrders';
import OrdersTableData from '../components/orders/orders-table/OrdersTableData';
import CreateOrderForm from '../components/orders/CreateOrderForm';
import OrdersHeaderSummary from '../components/orders/OrdersHeaderSummary';
import { PagesHeaderActionsContainer } from '../styles/main/pages-header-actions';

const Orders = () => {
    const { value: {clients, orders, setOrders}} = useDataContext();
    const { loadingOrders, getOrders } = useGetOrders();

    const handleGetOrders = async () => {
        const data = await getOrders();
        if (data) setOrders(data);
    }

    useEffect(() => {
        handleGetOrders();
    }, [clients]);

    return (
    <>
        <Stack mb={2}>
            <LayoutTitle icon={<LibraryBooksIcon sx={{fontSize:'30px'}} />} title={'List of '} titleSpan={'Orders'} />
        </Stack>

        { loadingOrders && (
            <LoadingBox>
                <CircularProgress />
            </LoadingBox>
        )}

        { !loadingOrders && orders && (
            <>  
                <PagesHeaderActionsContainer>
                    <Stack direction={'row'} alignItems={'center'} mb={1}>
                        <BodyTextTitle variant='subtitle1'>Active Orders</BodyTextTitle>
                        <AddNewElementBtn title={'Add new order'} modalContent={<CreateOrderForm />} />
                    </Stack>
                    <OrdersHeaderSummary />
                </PagesHeaderActionsContainer>
                { orders?.length === 0  && <BodyText variant='subtitle2'>No orders created yet</BodyText> }

                { orders.length > 0 && <OrdersTableData /> }
            </>
        )}
    </>
    )
}

export default Orders;