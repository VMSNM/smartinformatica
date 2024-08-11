import { BodyText, BodyTextTitle, LoadingBox } from '../styles/main';
import { CircularProgress, Stack } from '@mui/material';
import { useEffect } from 'react';
import ConstructionIcon from '@mui/icons-material/Construction';
import { useDataContext } from '../context/DataContext';
import AddNewElementBtn from '../components/common/AddNewElementBtn';
import LayoutTitle from '../layouts/common/LayoutTitle';
import useGetServices from '../hooks/services/useGetServices';
import CreateServiceForm from '../components/services/CreateServiceForm';
import ServicesTableData from '../components/services/services-table/ServicesTableData';
import ServicesHeaderSummary from '../components/services/ServicesHeaderSummary';
import { PagesHeaderActionsContainer } from '../styles/main/pages-header-actions';

const Services = () => {
    const { value: {clients, services, setServices}} = useDataContext();
    const { loadingServices, getServices } = useGetServices();

    const handleGetServices = async () => {
        const data = await getServices();
        if (data) setServices(data);
    }

    useEffect(() => {
        handleGetServices();
    }, [clients]);

    return (
    <>
        <Stack mb={2}>
            <LayoutTitle icon={<ConstructionIcon sx={{fontSize:'30px'}} />} title={'List of '} titleSpan={'Services'} />
        </Stack>

        { loadingServices && (
            <LoadingBox>
                <CircularProgress />
            </LoadingBox>
        )}

        { !loadingServices && services && (
            <>  
                <PagesHeaderActionsContainer>
                    <Stack direction={'row'} alignItems={'center'} mb={1}>
                        <BodyTextTitle variant='subtitle1'>Active Services</BodyTextTitle>
                        <AddNewElementBtn title={'Add new client'} modalContent={<CreateServiceForm />} />
                    </Stack>
                    <ServicesHeaderSummary />
                </PagesHeaderActionsContainer>

                { services?.length === 0  && <BodyText variant='subtitle2'>No services created yet</BodyText> }

                { services.length > 0 && <ServicesTableData /> }
            </>
        )}
    </>
    )
}

export default Services;