import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { columns, handleSetRows } from '../../../debts/debts-table/DebtsTableConfig.jsx';
import { StyledDataGrid } from '../../../../styles/datagrid-tables/index.js';
import { BodyText, LoadingBox } from '../../../../styles/main/index.js';
import { useCommonModalContext } from '../../../../context/CommonModalContext.jsx';
import DeleteDebt from '../../../debts/debts-table/DeleteDebt.jsx';
import UpdateDebtForm from '../../../debts/debts-table/UpdateDebtForm.jsx';
import { useClientDataContext } from '../../../../context/ClientDataContext.jsx';

const ClientDebtsTableData = () => {
  const { value: {clientData}} = useClientDataContext();
  const { debts } = clientData;
  const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

  const [tableRows, setTableRows] = useState(null);

  const handleOnCellClick = (params) => {
    const { field, row } = params;

    if (field === 'delete') {
      setCommonModalContent(<DeleteDebt debtID={row.id} debtDesc={row.description} />)
      setCommonModalOpen(true);
      return;
    }

    setCommonModalContent(<UpdateDebtForm debtInfo={row} />)
    setCommonModalOpen(true);
    
  };

  useEffect(() => {
    setTableRows(handleSetRows(debts));
  }, [debts]);

  return (
    <>
    { !tableRows || !debts ?
      <LoadingBox>
          <CircularProgress />
      </LoadingBox>

    : debts.length === 0 ? 
      <BodyText>No debts</BodyText>

    :
      <Box sx={{ height: 'auto', width: '100%' }}>
        <StyledDataGrid
          rows={tableRows}
          columns={columns}
          columnVisibilityModel={{id: false, clientID:false}}
          initialState={{
            sorting: {
              sortModel: [{ field: 'name', sort: 'asc' }],
            },
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          sx={{fontWeight: '500', '& .MuiDataGrid-cell:hover': {color: 'primary.main'}}}
          onCellClick={handleOnCellClick}
          disableRowSelectionOnClick
        />
      </Box>
    }
    </>
  )
}

export default ClientDebtsTableData;

