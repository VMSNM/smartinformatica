import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { columns, handleSetRows } from './ClientsTableConfig.jsx';
import { StyledDataGrid } from '../../../styles/datagrid-tables/index.js';
import { LoadingBox } from '../../../styles/main/index.js';
import { useDataContext } from '../../../context/DataContext.jsx';
import { useCommonModalContext } from '../../../context/CommonModalContext.jsx';
import DeleteClient from './DeleteClient.jsx';
import UpdateClientForm from './UpdateClientForm.jsx';

const ClientsTableData = () => {
  const { value: { clients }} = useDataContext();
  const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

  const [tableRows, setTableRows] = useState(null);

  const handleOnCellClick = (params) => {
    const { field, row } = params;
    
    if (field !== 'delete') {
      setCommonModalContent(<UpdateClientForm clientInfo={row} />)
      setCommonModalOpen(true);
      return;
    }
    setCommonModalContent(<DeleteClient clientID={row.id} clientName={row.name} />)
    setCommonModalOpen(true);
  };

  useEffect(() => {
    setTableRows(handleSetRows(clients));
  }, [clients]);

  return (
    <>
    { !tableRows || !clients ?
      <LoadingBox>
          <CircularProgress />
      </LoadingBox>

    : <Box sx={{ height: 'auto', width: '100%' }}>
        <StyledDataGrid
          rows={tableRows}
          columns={columns}
          columnVisibilityModel={{id: false}}
          initialState={{
            sorting: {
              sortModel: [{ field: 'name', sort: 'asc' }],
            },
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            }
          }}
          pageSizeOptions={[10, 25, 50]}s
          sx={{fontWeight: '500', '& .MuiDataGrid-cell:hover': {color: 'primary.main'}}}
          onCellClick={handleOnCellClick}
          disableRowSelectionOnClick
        />
      </Box>
    }
    </>
  )
}

export default ClientsTableData;

