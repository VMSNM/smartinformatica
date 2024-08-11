import React from 'react'
import { CircularProgress, Divider, Paper, Table, TableBody, TableContainer } from '@mui/material'
import { BodyTextTitle, LoadingBox } from '../../../styles/main'
import SummaryRowModel from './SummaryRowModel'
import { useClientDataContext } from '../../../context/ClientDataContext'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ConstructionIcon from '@mui/icons-material/Construction';
import PaidIcon from '@mui/icons-material/Paid';

const Summary = () => {
    const { value: { clientData, setClientData }} = useClientDataContext();
    const { orders, services, debts } = clientData;

    return (
        <>
            <BodyTextTitle textAlign={'left'} variant='subtitle1'>Summary</BodyTextTitle>
            <Divider sx={{marginBottom:'25px', marginTop: '5px'}} />

            { !services && ( <LoadingBox><CircularProgress /></LoadingBox> )}

            { services && (
            <TableContainer component={Paper}>
                <Table /* sx={{ border:`1px solid ${Colors.border}`}} */ aria-label="customized table">
                    <TableBody>
                        <SummaryRowModel 
                            icon={<LibraryBooksIcon />}
                            title={'Orders number'} 
                            value1={clientData?.orders?.length}
                        />
                        <SummaryRowModel 
                            icon={<LibraryBooksIcon />}
                            title={'Orders amount'} 
                            value1={clientData?.orders?.reduce((sum, order) => sum + order.price, 0)}
                            type='money'
                        />

                        <SummaryRowModel 
                            icon={<ConstructionIcon />}
                            title={'Services number'} 
                            value1={clientData?.services?.length}
                        />
                        <SummaryRowModel 
                            icon={<ConstructionIcon />}
                            title={'Services amount'} 
                            value1={clientData?.services?.reduce((sum, service) => sum + service.price, 0)}
                            type='money'
                        />

                        <SummaryRowModel 
                            icon={<PaidIcon />}
                            title={'Debts number'} 
                            value1={clientData?.debts?.length}
                        />
                        <SummaryRowModel
                            icon={<PaidIcon />}
                            title={'Debts amount'} 
                            value1={clientData?.debts?.reduce((sum, debt) => sum + debt.inDebtValue, 0)}
                            type='money'
                        />

                    </TableBody>
                </Table>
            </TableContainer>
            )}
        </>
    )
}

export default Summary