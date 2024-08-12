import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { columns, handleSetRows } from './DebtsTableConfig.jsx';
import { StyledDataGrid } from '../../../styles/datagrid-tables/index.js';
import { LoadingBox } from '../../../styles/main/index.js';
import { useDataContext } from '../../../context/DataContext.jsx';
import { useCommonModalContext } from '../../../context/CommonModalContext.jsx';
import UpdateClientForm from '../../clients/clients-table/UpdateClientForm.jsx';
import DeleteDebt from './DeleteDebt.jsx';
import UpdateDebtForm from './UpdateDebtForm.jsx';

const DebtsTableData = () => {
  const { value: { debts }} = useDataContext();
  const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

  const [tableRows, setTableRows] = useState(null);

  const handleOnCellClick = (params) => {
    const { field, row } = params;
    
    if (field === 'delete') {
      setCommonModalContent(<DeleteDebt debtID={row.id} debtDesc={row.description} />)
      setCommonModalOpen(true);
      return;
    }
    if (field === 'name') {
      let debt = debts?.find(element => element.clientID === row.clientID);
      setCommonModalContent(<UpdateClientForm clientInfo={debt.clientInfo} />)
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

    : <Box sx={{ height: 'auto', width: '100%' }}>
        <StyledDataGrid
          rows={tableRows}
          columns={columns}
          columnVisibilityModel={{id: false, clientID:false}}
          initialState={{
            sorting: {
              sortModel: [{ field: 'updatedAt', sort: 'asc' }],
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

export default DebtsTableData;

