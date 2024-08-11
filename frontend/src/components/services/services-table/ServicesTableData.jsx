import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { columns, handleSetRows } from './ServicesTableConfig.jsx';
import { StyledDataGrid } from '../../../styles/datagrid-tables/index.js';
import { LoadingBox } from '../../../styles/main/index.js';
import { useDataContext } from '../../../context/DataContext.jsx';
import { useCommonModalContext } from '../../../context/CommonModalContext.jsx';
import UpdateServiceForm from './UpdateServiceForm.jsx';
import DeleteService from './DeleteService.jsx';
import UpdateClientForm from '../../clients/clients-table/UpdateClientForm.jsx';

const ServicesTableData = () => {
  const { value: { services }} = useDataContext();
  const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

  const [tableRows, setTableRows] = useState(null);

  const handleOnCellClick = (params) => {
    const { field, row } = params;

    if (field === 'delete') {
      setCommonModalContent(<DeleteService serviceID={row.id} serviceDesc={row.description} />)
      setCommonModalOpen(true);
      return;
    }
    if (field === 'name') {
      let service = services?.find(element => element.clientID === row.clientID);
      setCommonModalContent(<UpdateClientForm clientInfo={service.clientInfo} />)
      setCommonModalOpen(true);
      return;
    }

    setCommonModalContent(<UpdateServiceForm serviceInfo={row} />)
    setCommonModalOpen(true);
    
  };

  useEffect(() => {
    setTableRows(handleSetRows(services));
  }, [services]);

  return (
    <>
    { !tableRows || !services ?
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
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
          sx={{fontWeight: '500', '& .MuiDataGrid-cell:hover': {color: 'primary.main'}}}
          onCellClick={handleOnCellClick}
          disableRowSelectionOnClick
        />
      </Box>
    }
    </>
  )
}

export default ServicesTableData;

