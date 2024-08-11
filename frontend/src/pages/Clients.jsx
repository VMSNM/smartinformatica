import { BodyText, BodyTextTitle, LoadingBox } from '../styles/main';
import { CircularProgress, Stack } from '@mui/material';
import { useEffect } from 'react';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import useGetClients from '../hooks/clients/useGetClients';
import AddNewElementBtn from '../components/common/AddNewElementBtn';
import CreateClientForm from '../components/clients/CreateClientForm';
import ClientsTableData from '../components/clients/clients-table/ClientsTableData';
import LayoutTitle from '../layouts/common/LayoutTitle';
import { useDataContext } from '../context/DataContext';
import ClientsHeaderSummary from '../components/clients/ClientsHeaderSummary';
import { PagesHeaderActionsContainer } from '../styles/main/pages-header-actions';

const Clients = () => {
    const { value: {clients, setClients}} = useDataContext();
    const { loadingClients, getClients } = useGetClients();

    const handleGetClients = async () => {
        const data = await getClients();
        if (data) setClients(data);
    }

    useEffect(() => {
        handleGetClients();
    }, []);

    return (
    <>
        <Stack mb={2}>
            <LayoutTitle icon={<AssignmentIndIcon sx={{fontSize:'30px'}} />} title={'List of '} titleSpan={'Clients'} />
        </Stack>

        { loadingClients && (
            <LoadingBox>
                <CircularProgress />
            </LoadingBox>
        )}

        { !loadingClients && clients && (
            <>  
                <PagesHeaderActionsContainer>
                    <Stack direction={'row'} alignItems={'center'} mb={1}>
                        <BodyTextTitle variant='subtitle1'>Active Clients</BodyTextTitle>
                        <AddNewElementBtn title={'Add new client'} modalContent={<CreateClientForm />} />
                    </Stack>
                    <ClientsHeaderSummary />
                </PagesHeaderActionsContainer>

                { clients?.length === 0  && <BodyText variant='subtitle2'>No clients created yet</BodyText> }

                <ClientsTableData />
            </>
        )}
    </>
    )
}

export default Clients;