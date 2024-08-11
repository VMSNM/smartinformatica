import { Box, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react';
import { columns, handleSetRows } from '../../../services/services-table/ServicesTableConfig.jsx';
import { StyledDataGrid } from '../../../../styles/datagrid-tables/index.js';
import { BodyText, LoadingBox } from '../../../../styles/main/index.js';
import { useCommonModalContext } from '../../../../context/CommonModalContext.jsx';
import DeleteService from '../../../services/services-table/DeleteService.jsx';
import UpdateServiceForm from '../../../services/services-table/UpdateServiceForm.jsx';
import { useClientDataContext } from '../../../../context/ClientDataContext.jsx';

const ClientServicesTableData = () => {
  const { value: {clientData}} = useClientDataContext();
  const { services } = clientData;
  const { value: { setCommonModalOpen, setCommonModalContent }} = useCommonModalContext();

  const [tableRows, setTableRows] = useState(null);

  const handleOnCellClick = (params) => {
    const { field, row } = params;

    if (field === 'delete') {
      setCommonModalContent(<DeleteService serviceID={row.id} serviceDesc={row.description} />)
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

    : services.length === 0 ? 
      <BodyText>No services</BodyText>

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

export default ClientServicesTableData;

