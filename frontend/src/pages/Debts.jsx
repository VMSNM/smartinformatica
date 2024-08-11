import { BodyText, BodyTextTitle, LoadingBox } from '../styles/main';
import { CircularProgress, Stack } from '@mui/material';
import { useEffect } from 'react';
import PaidIcon from '@mui/icons-material/Paid';
import AddNewElementBtn from '../components/common/AddNewElementBtn';
import LayoutTitle from '../layouts/common/LayoutTitle';
import { useDataContext } from '../context/DataContext';
import useGetDebts from '../hooks/debts/useGetDebts';
import CreateDebtForm from '../components/debts/CreateDebtForm';
import DebtsTableData from '../components/debts/debts-table/DebtsTableData';
import { PagesHeaderActionsContainer } from '../styles/main/pages-header-actions';
import DebtsHeaderSummary from '../components/debts/DebtsHeaderSummary';

const Debts = () => {
    const { value: {clients, debts, setDebts}} = useDataContext();
    const { loadingDebts, getDebts } = useGetDebts();

    const handleGetDebts = async () => {
        const data = await getDebts();
        if (data) setDebts(data);
    }

    useEffect(() => {
        handleGetDebts();
    }, [clients]);

    return (
    <>
        <Stack mb={2}>
            <LayoutTitle icon={<PaidIcon sx={{fontSize:'30px'}} />} title={'List of '} titleSpan={'Debts'} />
        </Stack>

        { loadingDebts && (
            <LoadingBox>
                <CircularProgress />
            </LoadingBox>
        )}

        { !loadingDebts && debts && (
            <>  
                <PagesHeaderActionsContainer>
                    <Stack direction={'row'} alignItems={'center'} mb={1}>
                        <BodyTextTitle variant='subtitle1'>Active Debts</BodyTextTitle>
                        <AddNewElementBtn title={'Add new debt'} modalContent={<CreateDebtForm />} />
                    </Stack>
                    <DebtsHeaderSummary />
                </PagesHeaderActionsContainer>

                { debts?.length === 0  && <BodyText variant='subtitle2'>No debts created yet</BodyText> }

                { debts.length > 0 && <DebtsTableData /> }
            </>
        )}
    </>
    )
}

export default Debts;